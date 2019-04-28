package com.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Locale;

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

//	@RequestMapping(method = {RequestMethod.GET, RequestMethod.POST}, value = "/ws/**")
////	public void ws(HttpServletRequest req, HttpServletResponse res) {
////		try {
////			res.getWriter().println("Hello");
////		} catch (IOException e) {
////			e.printStackTrace();
////		}
////	}
}

