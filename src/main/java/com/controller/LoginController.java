package com.controller;

import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
	@Autowired
	UserServices userServices;

	@PostMapping("/loginResult")
	public String loginresult(@RequestParam String email ,
						@RequestParam String password, ModelMap model) {
		model.addAttribute("pass",password);
		model.addAttribute("email",email);
		model.addAttribute("checkValidEmail",userServices.findValidUser(email).get(0));
		return "loginResult";
	}

	@RequestMapping(value = "/login")
	public String login (@RequestParam(value = "error", required =false)final String error, final Model model) {
		if (error != null) {
			model.addAttribute("message", "Login Failed!");
		}
		return "login-sec";}

	@RequestMapping("/admin")
	public String admin() {
		return "admin";
	}
	@RequestMapping("/user")
	public String user() {
		return "user";
	}
	@RequestMapping("/logout")
	public String logout(final Model model) {
		model.addAttribute("message", "Logged out!");
		return "login-sec";
	}

}

