package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

@Controller
public class SignupController {
//	@Autowired
//	UserServices userServices;

	@GetMapping("/signup")
	public String getSignup() { return "signup"; }

	@PostMapping("/signup")
	public String signup(@RequestParam String email,
	                     @RequestParam String nickname,
	                     @RequestParam String password,
                         @RequestParam String repassword,
                         ModelMap model) {
		// ADD USER TO DB HERE
//		model.addAttribute("registerNewUser", userServices.registerNewUser(nickname, email, password));
		model.addAttribute("message", "Sign up successfully!");
		return "login";
	}
}

