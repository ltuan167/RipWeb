package com.dao;

import com.entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

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

	public User getUserByEmail(String email) {
		Session session = this.sessionFactory.getCurrentSession();
		String hql = "SELECT * FROM User WHERE email='"+email+"'";
		return (User) session.createNativeQuery(hql).getResultList().get(0);
	}

	public String loadPassword(String email) {
		return getUserByEmail(email).getPassword();
	}

	public String loadNickname(String email) {
		return getUserByEmail(email).getNickname();
	}

	public Integer registerNewUser (final String nickname,
									final String email,
									final String psw) {
		Session session = this.sessionFactory.getCurrentSession();
		Transaction tx = session.beginTransaction();
		String hql = "INSERT INTO User(nickname, email, password) VALUE (?,?,?)";
		Integer i =  session.createSQLQuery(hql).
					 setParameter(1, nickname).
					 setParameter(2, email).
					 setParameter(3, new BCryptPasswordEncoder().encode(psw)).executeUpdate();
		tx.commit();
		return i;
	}

}