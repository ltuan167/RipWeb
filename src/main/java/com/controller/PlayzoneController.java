package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PlayzoneController {
    @RequestMapping(method = RequestMethod.GET, value = {"/", "/playzone"})
    public String homepage() {
        return "playzone";
    }
}

