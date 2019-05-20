package com.services;

import com.dao.UserDAO;
import com.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServices {
    @Autowired
    private UserDAO userDao;

    public static List<User> listUser = new ArrayList<User>();


    //    public List<User> findValidUser(String email) {
//        return userDao.findValidUser(email);
//    }
//
//    public User findById(int id) {
//        return userDao.findById(id);
//    }
//
//    public void save(User user){
//        // validate business
//        userDao.save(user);
//    }
//    public void update(User user){
//        // validate business
//        userDao.update(user);
//    }
//
//    public void delete(int id){
//        // validate business
//        userDao.delete(userDao.findById(id));
//    }
//
    public Integer registerNewUser(String email, String name, String psw ) {
        return userDao.registerNewUser(email, name, psw);
    }

    public String loadpassword (String email) {
        return userDao.loadpassword(email);
    }

    public List<User> loadUserByEmail(String email) {
        return userDao.loadUserByEmail(email);
    }

//    public Boolean checkLogin() {
//        return userDao.c
//    }

}