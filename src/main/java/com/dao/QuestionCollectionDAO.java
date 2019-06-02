package com.dao;

import com.entities.QuestionCollection;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository(value = "questionCollectionDAO")
@Transactional(rollbackOn = Exception.class)
public class QuestionCollectionDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public QuestionCollection getQuestionCollectionById(int questionCollectionID) {
		Session session = sessionFactory.getCurrentSession();
		Transaction tx = session.beginTransaction();
		String sql = "SELECT * FROM QuestionCollection WHERE id="+questionCollectionID;
		QuestionCollection questionCollection = (QuestionCollection) session.createSQLQuery(sql).addEntity(QuestionCollection.class).uniqueResult();
		tx.commit();
		return questionCollection;
	}

	public List getAllQuestionCollections() {
		Session session = sessionFactory.getCurrentSession();
		session.beginTransaction();
		return session.createSQLQuery("SELECT * FROM QuestionCollection").addEntity(QuestionCollection.class).getResultList();
	}

}
