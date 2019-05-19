package com.controller;

import com.JWT.JwtService;
import com.dao.UserDAO;
import com.entities.User;
import com.services.UserServices;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/rest")
public class UserRestController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserServices userServices;

    /* ---------------- GET ALL USER ------------------------ */
//    @RequestMapping(value = "/users", method = RequestMethod.GET)
//    public ResponseEntity<List<User>> getAllUser() {
//        return new ResponseEntity<List<User>>(userServices.findAll(), HttpStatus.OK);
//    }

    /* ---------------- GET USER BY ID ------------------------ */
//    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
//    public ResponseEntity<Object> getUserById(@PathVariable int id) {
//        User user = userServices.findById(id);
//        if (user != null) {
//            return new ResponseEntity<Object>(user, HttpStatus.OK);
//        }
//        return new ResponseEntity<Object>("Not Found User", HttpStatus.NO_CONTENT);
//    }

    /* ---------------- CREATE NEW USER ------------------------ */
//    @RequestMapping(value = "/users", method = RequestMethod.POST)
//    public ResponseEntity<String> createUser(@RequestBody User user) {
//        if (userServices.add(user)) {
//            return new ResponseEntity<String>("Created!", HttpStatus.CREATED);
//        } else {
//            return new ResponseEntity<String>("User Existed!", HttpStatus.BAD_REQUEST);
//        }
//    }

    /* ---------------- DELETE USER ------------------------ */
//    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
//    public ResponseEntity<String> deleteUserById(@PathVariable int id) {
//        userServices.delete(id);
//        return new ResponseEntity<String>("Deleted!", HttpStatus.OK);
//    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<String> login(HttpServletRequest request,
                                        @RequestBody User user,
                                        @RequestParam String email,
                                        @RequestParam String pass) {
        String result = "";
        HttpStatus httpStatus = null;
        try {
            if (userServices.loadpassword(email).equals(pass)) {                                                         // check valid user
                result = jwtService.generateTokenLogin(user.getUsername());
                httpStatus = HttpStatus.OK;
            } else {
                result = "Wrong userId and password";
                httpStatus = HttpStatus.BAD_REQUEST;
            }
        } catch (Exception ex) {
            result = "Server Error";
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<String>(result, httpStatus);
    }

}