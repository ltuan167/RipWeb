package com.controller;

import com.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class HostController {

    private String doSimpleFilter(HttpServletRequest req, HttpServletResponse res, String successView) {
        User user = (User) req.getSession().getAttribute("user");
        return user != null ? successView : "login";
    }

    @GetMapping("/host")
    public String homepage(HttpServletRequest req, HttpServletResponse res)         { return doSimpleFilter(req,res,"hostView");}

    @GetMapping("/editOverview")
    public String editview(HttpServletRequest req, HttpServletResponse res)         {return doSimpleFilter(req,res,"editOverview");}

    @GetMapping("/editQuestion")
    public String editquestion(HttpServletRequest req, HttpServletResponse res)     {return doSimpleFilter(req,res,"editQuestion");}

    @GetMapping("/displayQuestion")
    public String displayQuestion(HttpServletRequest req, HttpServletResponse res)  {return doSimpleFilter(req,res, "displayQuestion");}

}

