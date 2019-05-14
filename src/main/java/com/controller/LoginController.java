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
	public String login(@RequestParam String email , @RequestParam String password, ModelMap model) {
		model.addAttribute("pass", password);
		model.addAttribute("email", email);

		if (email.equals(password))
			return "homepage";
		else {
			model.addAttribute("message", "Wrong email or password!");
			return "login";
		}

		// validate login session
		//	model.addAttribute("checkValidEmail", userServices.findValidUser(email).get(0));
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