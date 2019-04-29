package com.controller;

import com.Dao.UserDao;
import com.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {
    @Autowired
    private UserServices userServices;
    @RequestMapping(method = RequestMethod.GET, value = "/UserList")
    public String signup(ModelMap model) {
        model.addAttribute("listUser", userServices.findAll());
        return "UserList";
    }
}

