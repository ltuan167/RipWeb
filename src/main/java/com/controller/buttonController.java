package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class buttonController {
    @GetMapping("/button")
    public String homepage() {
        return "button";
    }
}

