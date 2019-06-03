package com.dao;

import com.entities.Question;
import com.entities.QuestionCollection;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

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

	public List<QuestionCollection> getAllQuestionCollections() {
		Session session = sessionFactory.getCurrentSession();
		Transaction tx = session.beginTransaction();
		List<QuestionCollection> listOfCollections = session.createSQLQuery("SELECT * FROM QuestionCollection").addEntity(QuestionCollection.class).getResultList();
		tx.commit();
		return listOfCollections;
	}

	public Integer addNewQuestionCollection(QuestionCollection questionCollection) {
		if (questionCollection != null) {
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			Integer newCollectionId = (Integer) session.save(questionCollection);
			tx.commit();
			return newCollectionId;
		}
		return null;
	}

	public boolean updateNewQuestions2Collection(Integer questionCollectionID, Set<Question> questionSet) {
		QuestionCollection questionCollection = getQuestionCollectionById(questionCollectionID);
		if (questionCollection != null) {
			for (Question question : questionSet) {
				question.setQuestionCollection_ID(questionCollection);
				questionCollection.getQuestions().add(question);
			}
			Session session = sessionFactory.openSession();
			Transaction tx = session.beginTransaction();
			session.update(questionCollection);
			tx.commit();
			return true;
		}
		return false;
	}

}
