package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class buttonController {
    @GetMapping("/displayQuestion")
    public String homepage() {
        return "displayQuestion";
    }
}

