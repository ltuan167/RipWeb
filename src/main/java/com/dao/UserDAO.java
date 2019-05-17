package com.dao;

import com.config.WebSecurityConfig;
import com.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import javax.transaction.UserTransaction;
import java.util.ArrayList;
import java.util.List;

@Repository(value = "userDAO")
@Transactional(rollbackOn = Exception.class)
public class UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

//	public void save(final User user) {
//		Session session = this.sessionFactory.getCurrentSession();
//		session.save(user);
//	}
//	public void update(final User user) {
//		Session session = this.sessionFactory.getCurrentSession();
//		session.update(user);
//	}
//	public User findById(final int id) {
//		Session session = this.sessionFactory.getCurrentSession();
//		return session.get(User.class, id);
//	}
//	public void delete(final User user) {
//		Session session = this.sessionFactory.getCurrentSession();
//		session.remove(user);
//	}
	public List<User> findValidUser(final String email) {
		Session session = this.sessionFactory.getCurrentSession();
		String hql = "SELECT password FROM User WHERE email='"+email+"'";
		return  session.createNativeQuery(hql).getResultList();
	}
	public Integer registerNewUser (final String nickname,
									final String email,
									final String psw) {
		Transaction tx = null;
		Session session = this.sessionFactory.getCurrentSession();
		tx = session.beginTransaction();
		String hql = "INSERT INTO User(nickname, email, password) VALUE (?,?,?)";
		Integer i =  session.createSQLQuery(hql).
					 setParameter(1, nickname).
					 setParameter(2, email).
					 setParameter(3, new BCryptPasswordEncoder().encode(psw)).executeUpdate();
		tx.commit();
		return i;
	}

//
//	public User loadUserbyEmail (final String email) {
//		List<User> users = new ArrayList<>()	;
//		Session session = this.sessionFactory.getCurrentSession();
//		users = session.createQuery("from User where email=?", User.class)
//									.setParameter(0, email).list();
//		return users.size() > 0 ? users.get(0) : null;
//	}
}
// Test slack icon