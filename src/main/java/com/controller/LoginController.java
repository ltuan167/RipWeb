package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
//	@Autowired
//	UserServices userServices;

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