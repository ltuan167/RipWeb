package com.rest;

import com.dao.QuestionCollectionDAO;
import com.entities.QuestionEntity;
import com.entities.QuestionCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.Set;

@RestController
@RequestMapping("/1.0/db")
public class DatabaseAPIController {

	@Autowired QuestionCollectionDAO questionCollectionDAO;

	@PostMapping(value = "/collection/get", produces = MediaType.APPLICATION_JSON_VALUE)
	public void getQuestionCollectionById(@RequestParam int questionCollectionId, HttpServletRequest req, HttpServletResponse res) {
		QuestionCollection questionCollection = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
		try {
			Set<QuestionEntity> setOfQuestionEntities = questionCollection.getQuestions();
			if (setOfQuestionEntities != null && setOfQuestionEntities.size() > 0)
				res.getWriter().println(Arrays.toString(setOfQuestionEntities.toArray()));
			else
				res.getWriter().println("Hông có câu hỏi nào hết trơnnnn :(((");
		} catch (IOException e) {
			e.printStackTrace();
		}
//		System.out.println((Arrays.toString(questionCollection.getQuestions().toArray())));
	}

}
