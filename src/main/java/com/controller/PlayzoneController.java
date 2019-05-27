package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PlayzoneController {
    @GetMapping("/play")
    public String homepage() {
        return "play";
    }
}

