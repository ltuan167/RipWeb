package com.test.Hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RequestMapping("/")
@Controller
public class HomepageController {
    @RequestMapping(method = RequestMethod.GET)
    public String Hello() {
        return "homepage";
    }
    @RequestMapping(method = RequestMethod.GET, value = "/homepage")
    public String printHello(ModelMap model) {
        model.addAttribute("message1", "Hello spring mvc ");
        return "homepage";
    }
    @RequestMapping(method = RequestMethod.POST,value = "/register")
    public String register(ModelMap model1) {
        model1.addAttribute("message4","Welcome to register page");
        return "register";
    }
}

