package com.controller;

import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

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
	public String login () {return "/login";}

	@RequestMapping("/loginsec")
	public String securityLogin (Model model) {
		model.addAttribute("title1","ABCXYZ");
		model.addAttribute("title2","ABCDEFGHIJK");
		return "loginsec";
	}

}

