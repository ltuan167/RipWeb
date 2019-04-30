package com.dao;

import com.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository(value = "userDAO")
@Transactional(rollbackOn = Exception.class)
public class UserDAO {

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
	public void delete(final User user) {
		Session session = this.sessionFactory.getCurrentSession();
		session.remove(user);
	}
	public List<User> findValidUser(final String email) {
		Session session = this.sessionFactory.getCurrentSession();
		String hql = "SELECT password FROM User WHERE email='"+email+"'";
		return  session.createNativeQuery(hql).getResultList();
	}
}