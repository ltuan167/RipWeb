package com.controller;

import com.JWT.JwtService;
import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class LoginController {
	@Autowired
	UserServices userServices;

	@Autowired
	private JwtService jwtService;
//
//	@PostMapping("/login")
//	public String login(@RequestParam String email,
//	                    @RequestParam String password,
//	                    HttpServletRequest req,
//	                    HttpServletResponse res,
//	                    final Model model) {
//		try {
//			if (new BCryptPasswordEncoder().matches(password, userServices.loadPassword(email))) { // check valid user
//				String token = jwtService.generateTokenLogin(email);
//				Cookie jwtCookie = new Cookie("jwt", token);
////				jwtCookie.setSecure(true);
//				res.addCookie(jwtCookie);
//				model.addAttribute("nickname",userServices.loadNickname(email));
//				return "homepage";
//			} else {
//				model.addAttribute("msg","Wrong email or password");
//				return "login";
//			}
//		} catch (Exception ex) {
////			model.addAttribute("msg","Wrong email or password");
//			System.err.println(ex.getMessage());  // Debug
//			return "login";
//		}
//	}
//
	@GetMapping(value = "/login")
	public String getLogin(final Model model) {
		return "login";
	}
//
//	@RequestMapping("/admin")
//	public String admin() { return "admin"; }
//	@RequestMapping("/user")
//	public String user() { return "user"; }
//
	@RequestMapping("/logout")
	public String logout(final Model model) {
		model.addAttribute("message", "Logged out!");
		return "login";
	}

}