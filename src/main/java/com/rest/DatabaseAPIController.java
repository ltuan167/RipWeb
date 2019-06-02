package com.rest;

import com.dao.QuestionCollectionDAO;
import com.dao.UserDAO;
import com.entities.QuestionCollection;
import com.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@RestController
@RequestMapping("/1.0/db")
public class DatabaseAPIController {

	@Autowired
	QuestionCollectionDAO questionCollectionDAO;

	@Autowired
	UserDAO userDAO;

	@GetMapping(value = "/collection/get", produces = MediaType.APPLICATION_JSON_VALUE)
	public Set<QuestionCollection> getQuestionCollectionById(@RequestParam String email, HttpServletRequest req, HttpServletResponse res) {
		User user = userDAO.getUserByEmail(email);
//		if (user != null)
		return null;
//			Set<QuestionCollection> setOfQuestionCollections = user.getQuestionCollections();
	}

}
