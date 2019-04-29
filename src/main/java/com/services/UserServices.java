package com.services;

import java.util.List;

import com.Dao.UserDao;
import com.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
@Transactional
public class UserServices {
    @Autowired
    private UserDao userDao;

    public List<User> findAll() {
        return userDao.findAll();
    }
    public User findById(int id) {
        return userDao.findById(id);
    }

    public void save(User user){
        // validate business
        userDao.save(user);
    }
    public void update(User user){
        // validate business
        userDao.update(user);
    }

    public void delete(int id){
        // validate business
        //userDao.delete(id);
    }
}