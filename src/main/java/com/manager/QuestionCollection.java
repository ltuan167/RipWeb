package com.manager;

import com.dao.QuestionCollectionDAO;
import com.entities.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Configurable
public class QuestionCollection {

	@Autowired
	QuestionCollectionDAO questionCollectionDAO;

	private Set<com.entities.Question> questions = new HashSet<>();

	public QuestionCollection() { }

	public QuestionCollection(int questionCollectionId) {
		if (questionCollectionDAO == null) {
			System.out.println("AUTOWIRED NULL");
		}
		System.out.println("Create new question collection id: " + questionCollectionId);
		com.entities.QuestionCollection questionCollection = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
		if (questionCollection != null) {
			System.out.println(questionCollection);
			Set<Question> setOfQuestions = questionCollection.getQuestions();
			if (setOfQuestions != null) {
//				System.out.println();
				System.out.println(Arrays.toString(setOfQuestions.toArray()));
			}
		}
//		Set<com.entities.Question> setOfQuestions = questionCollectionDAO.getQuestionCollectionById(questionCollectionId).getQuestions();
//		if (setOfQuestions != null) {
//			this.questions = setOfQuestions;
//			System.out.println("not null");
//		}
//		System.out.println(setOfQuestions);
//
//		com.entities.QuestionCollection questionCollection = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
//		try {
//			Set<Question> setOfQuestionEntities = questionCollection.getQuestions();
//			if (setOfQuestionEntities != null && setOfQuestionEntities.size() > 0)
//				res.getWriter().println(Arrays.toString(setOfQuestionEntities.toArray()));
//			else
//				res.getWriter().println("Hông có câu hỏi nào hết trơnnnn :(((");
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		System.out.println((Arrays.toString(questionCollection.getQuestions().toArray())));
	}

	@Override
	public String toString() {
		return Arrays.toString(this.questions.toArray());
	}

}
