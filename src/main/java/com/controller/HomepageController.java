package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomepageController {
    @RequestMapping(method = RequestMethod.GET, value = {"/", "/home"})
    public String homepage() {
        return "homepage";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/chat")
    public String chat() {
        return "chat";
    }

}

