package com.controller;

import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
	@Autowired
	UserServices userServices;
	@RequestMapping(method = RequestMethod.POST, value = "/loginResult")
	public String loginresult(@RequestParam String email ,
						@RequestParam String password, ModelMap model) {
		model.addAttribute("pass",password);
		model.addAttribute("email",email);
		model.addAttribute("checkValidEmail",userServices.findValidUser(email).get(0));
		return "loginResult";
	}
	@RequestMapping(value = "/login")
	public String login () {return "/login";}
}

