package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class buttonController {
    @GetMapping("/hostView")
    public String homepage() { return "hostView";}
    @GetMapping("/editOverview")
    public String editview() {return "editOverview";}
    @GetMapping("/editQuestion")
    public String editquestion() {return "editQuestion";}
}

