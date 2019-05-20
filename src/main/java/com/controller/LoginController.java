package com.controller;

import com.JWT.JwtService;
import com.entities.User;
import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {
	@Autowired
	UserServices userServices;

	@Autowired
	private JwtService jwtService;

	@PostMapping("/login")
	public String login(@RequestParam(value = "error", required = false) final String error, final Model model) {
		if (error != null) {
			model.addAttribute("message", "Login Failed!");
		}
		return "login";
	}

	@GetMapping(value = "/login")
	public String getLogin(final Model model) {
		return "login";
	}

	@RequestMapping("/admin")
	public String admin() { return "admin"; }
	@RequestMapping("/user")
	public String user() { return "user"; }

	@RequestMapping("/logout")
	public String logout(final Model model) {
		model.addAttribute("message", "Logged out!");
		return "login";
	}

}