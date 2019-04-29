package com.controller;

import com.entities.User;
import com.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/userlist")
	public String listUser(Model model) {
		model.addAttribute("listUser",userService.findAll());
		return "userlist";
	}

	@RequestMapping(value = "/signupdemo")
	public String signupdemo(Model model) {
		User demoUser = new User();
		demoUser.setUsername("hungthuanmk");
		demoUser.setName("Thuan Ng.");
		demoUser.setPassword("Thuan Ng.");
		userService.save( demoUser);
		model.addAttribute("listUser",userService.findAll());
		return "userlist";
	}
}
