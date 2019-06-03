package com.rest;

import com.dao.QuestionCollectionDAO;
import com.dao.UserDAO;
import com.entities.Question;
import com.entities.QuestionCollection;
import com.entities.User;
import com.model.ApiResponse;
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
	public ApiResponse getQuestionsInCollectionById(@RequestParam int questionCollectionId, HttpServletResponse res) {
		QuestionCollection questionCollection = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
		if (questionCollection != null) {
			ApiResponse response = new ApiResponse();
			response.setType(ApiResponse.ApiResponseType.OK);
			response.setContent(questionCollection);
			return response;
		}
		res.setStatus(HttpServletResponse.SC_NOT_FOUND);
		return null;
	}

	@PutMapping(value = "/collection/put", produces = MediaType.APPLICATION_JSON_VALUE)
	public ApiResponse addNewQuestionCollection(@RequestParam Integer owner_id, @RequestParam String name, @RequestParam(required = false) String description,
												@RequestBody(required = false) Set<Question> questionSet, HttpServletResponse res) {
		QuestionCollection newQuestionCollection = new QuestionCollection();
		User owner = userDAO.getUserById(owner_id);
		if (owner != null) {
			newQuestionCollection.setOwner_id(owner);
			newQuestionCollection.setName(name);
			if (description != null)
				newQuestionCollection.setDescription(description);


			Integer newCollectionId = questionCollectionDAO.addNewQuestionCollection(newQuestionCollection);
			if (newCollectionId != null) {
				if (questionSet != null)
					questionCollectionDAO.updateNewQuestions2Collection(newCollectionId, questionSet);
				ApiResponse response = new ApiResponse();
				response.setType(ApiResponse.ApiResponseType.OK);
				response.setContent(newCollectionId);
				return response;
			}
		}
		res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		return null;
	}


//	@RequestParam String question, @RequestParam(required = false) String image,
//	@RequestParam Integer correctAnswer, @RequestParam String answer1, @RequestParam String answer2, @RequestParam String answer3,
//	@RequestParam String answer4,
	@PutMapping(value = "/question/put", produces = MediaType.APPLICATION_JSON_VALUE)
	public void addNewQuestion(@RequestParam Integer collectionId, @RequestBody Set<Question> questionSet, HttpServletResponse res) {
		if (questionCollectionDAO.updateNewQuestions2Collection(collectionId, questionSet)) {
			res.setStatus(HttpServletResponse.SC_OK);
			return;
		}
		res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
	}

	@GetMapping(value = "/collection/list", produces = MediaType.APPLICATION_JSON_VALUE)
	public ApiResponse getAllCollections() {
		ApiResponse response = new ApiResponse();
		response.setType(ApiResponse.ApiResponseType.OK);
		response.setContent(questionCollectionDAO.getAllQuestionCollections());
		return response;
	}

}

//class QuestionPacks {
//	Set<Question>
//}
