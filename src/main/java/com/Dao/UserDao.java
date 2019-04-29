package com.Dao;

import com.entity.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository(value = "UserDao")
@Transactional(rollbackFor = Exception.class)
public class UserDao {
    @Autowired
    private SessionFactory sessionFactory;
    public void save(final User user) {
        Session session = this.sessionFactory.getCurrentSession();
        session.save(user);
    }
    public void update(final User user) {
        Session session = this.sessionFactory.getCurrentSession();
        session.update(user);
    }
    public User findById(final int id) {
        Session session = this.sessionFactory.getCurrentSession();
        return session.get(User.class, id);
    }
    public void delete(final User customer) {
        Session session = this.sessionFactory.getCurrentSession();
        session.remove(customer);
    }
    public List<User> findAll() {
        Session session = this.sessionFactory.getCurrentSession();
        return session.createQuery("FROM User", User.class).getResultList();
    }
}

