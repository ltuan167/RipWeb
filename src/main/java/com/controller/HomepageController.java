package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

@Controller
public class HomepageController {

    @GetMapping({"/", "/home"})
    public String homepage() {
        return "homepage";
    }

    @GetMapping("/chat")
    public String chat(Locale locale, Model model, HttpServletRequest req, HttpServletResponse res) {
        res.addCookie(new Cookie("sessionId", req.getSession().getId()));
        return "chat";
    }

}

