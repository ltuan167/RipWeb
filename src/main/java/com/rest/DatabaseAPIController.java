package com.rest;

import com.dao.QuestionCollectionDAO;
import com.entities.Question;
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

	@Autowired
	QuestionCollectionDAO questionCollectionDAO;

	@PostMapping(value = "/collection/get", produces = MediaType.APPLICATION_JSON_VALUE)
	public void getQuestionCollectionById(@RequestParam int questionCollectionId, HttpServletRequest req, HttpServletResponse res) {
		QuestionCollection questionCollection = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
		try {
			if (questionCollection != null)
				res.getWriter().println(questionCollection);
			else
				res.getWriter().println("Hông có câu hỏi nào hết trơnnnn :(((");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
