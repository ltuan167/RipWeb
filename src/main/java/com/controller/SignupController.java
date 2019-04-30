package com.controller;

import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SignupController {
	@Autowired
	UserServices userServices;
	@RequestMapping(method = RequestMethod.GET, value = "/signup")
	public String signup() {
		return "signup";
	}

	@RequestMapping(value = "/registerResult")
	public String signupResult(@RequestParam String usrnm,
							   @RequestParam String emailre,
							   @RequestParam String psw,
							   ModelMap model) {
		model.addAttribute("registerNewUser", userServices.registerNewUser(usrnm,emailre,psw));
		return "registerResult";
	}
}

