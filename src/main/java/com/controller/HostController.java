package com.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HostController {

    @GetMapping("/host")
    public String homepage() { return "hostView";}

    @GetMapping("/editOverview")
    public String editview() {return "editOverview";}

    @GetMapping("/editQuestion")
    public String editquestion() {return "editQuestion";}

    @GetMapping("/displayQuestion")
    public String displayQuestion() {return "displayQuestion";}

}

