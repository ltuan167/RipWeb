package com.dao;

import com.manager.Question;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.util.ArrayList;

@Repository(value = "questionCollectionDAO")
@Transactional(rollbackOn = Exception.class)
public class QuestionCollectionDAO {

	@Autowired
	private SessionFactory sessionFactory;

//	public ArrayList<Question> getQuestionsByCollectionId(int questionCollectionID) {
//
//	}

}
