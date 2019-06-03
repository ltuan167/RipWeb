package com.controller;

import com.JWT.JwtService;
import com.dao.UserDAO;
import com.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
class LoginController {

	@Autowired
	UserDAO userDAO;

	@Autowired
	private JwtService jwtService;

	@PostMapping("/login")
	public String login(@RequestParam String email,
	                    @RequestParam String password,
	                    HttpServletRequest req,
	                    HttpServletResponse res,
	                    final Model model) {
		try {
			User user = userDAO.getUserByEmail(email);
			if (new BCryptPasswordEncoder().matches(password, user.getPassword())) { // check valid user
				req.getSession().setAttribute("user", user);
				String token = jwtService.generateTokenLogin(email);
				Cookie jwtCookie = new Cookie("jwt", token);
//				jwtCookie.setSecure(true);
				res.addCookie(jwtCookie);
				req.getSession().setAttribute("user", user);
				model.addAttribute("nickname", user.getEmail());
				return "homepage";
			} else {
				model.addAttribute("msg","Wrong email or password");
				return "login";
			}
		} catch (Exception ex) {
//			model.addAttribute("msg","Wrong email or password");
			System.err.println(ex.getMessage());  // Debug
			return "login";
		}
	}

	@GetMapping(value = "/login")
	public String getLogin(final Model model) {
		return "login";
	}


	@RequestMapping("/logout")
	public String logout(HttpServletRequest req, HttpServletResponse res, Model model) {
		if (req.getSession().getAttribute("user") != null)
			req.getSession().removeAttribute("user");
		req.getSession().invalidate();
		res.addCookie(new Cookie("jwt", null));
		model.addAttribute("message", "Logged out!");
		return "login";
	}

}