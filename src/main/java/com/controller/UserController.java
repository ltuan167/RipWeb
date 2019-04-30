package com.controller;

import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

	@Autowired
	private UserServices userServices;

	@RequestMapping(value = "/userlist")
	public String listUser(Model model) {
		model.addAttribute("listUser",userServices.findValidUser(""));
		return "userlist";
	}

//	@RequestMapping(value = "/signupdemo")
//	public String signupdemo(Model model) {
//		model.addAttribute("listUser",userServices.findAll());
//		return "userlist";
//	}
}
