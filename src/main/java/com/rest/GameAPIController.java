package com.rest;

import com.manager.Game;
import com.manager.GameManager;
import com.model.GameApiResponse;
import com.model.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;

@RestController
@RequestMapping("/1.0/game")
public class GameAPIController {

	@GetMapping
	public String greetingToGameAPI() {
		return "Welcome to GAME APIs!";
	}

	@PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse createNewGame(@RequestParam int questionCollectionId, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse createResponse = new GameApiResponse();
		Integer createdGamePIN = GameManager.getInstance().createNewGame(questionCollectionId);
		if (createdGamePIN > 0) {
			createResponse.setType(GameApiResponse.GameCommandType.GAME_CREATED);
			createResponse.setContent(String.valueOf(createdGamePIN));
			res.setStatus(HttpServletResponse.SC_CREATED);
		} else {
			createResponse.setType(GameApiResponse.GameCommandType.REQUEST_ERROR);
			createResponse.setContent(String.valueOf(createdGamePIN));
			res.setStatus(HttpServletResponse.SC_EXPECTATION_FAILED);
		}
		return createResponse;
	}

	@PostMapping(value = "/join", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse joinGame(@RequestParam int gamePIN, @RequestParam String nickname, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse joinResponse = new GameApiResponse();
		String joined = GameManager.getInstance().joinGame(req.getSession().getId(), gamePIN, nickname);
		if (joined != null && joined.equals(Game.OK)) {
			joinResponse.setType(GameApiResponse.GameCommandType.JOIN_ACCEPTED);
			joinResponse.setContent(String.valueOf(gamePIN));
			res.setStatus(HttpServletResponse.SC_ACCEPTED);
		} else {
			joinResponse.setType(GameApiResponse.GameCommandType.JOIN_DENIED);
			joinResponse.setContent(joined);
			res.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		}
		return joinResponse;
	}

	@PostMapping(value = "/submit", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse submitAnswer(@RequestParam int gamePIN, @RequestParam int questionId, @RequestParam int chooseAnswerId, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse submittedResponse = new GameApiResponse();
		submittedResponse.setType(GameApiResponse.GameCommandType.SUBMIT_ACCEPTED);
		submittedResponse.setContent(String.valueOf(new Random().nextInt(1000)));
		return submittedResponse;
	}

	@PostMapping(value = "/start", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse startGame(@RequestParam int gamePIN, HttpServletResponse res) {
		GameApiResponse startGameResponse = new GameApiResponse();
		Game game = GameManager.getInstance().getGameByPIN(gamePIN);
		if (game == null) {
			startGameResponse.setType(GameApiResponse.GameCommandType.REQUEST_ERROR);
			startGameResponse.setContent("DOES NOT FOUND GAME!");
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		String startGameStatus = game.startGame();
		if (startGameResponse.equals(Game.OK)) {
			startGameResponse.setType(GameApiResponse.GameCommandType.GAME_STARTED);
		} else {
			startGameResponse.setType(GameApiResponse.GameCommandType.REQUEST_ERROR);
			startGameResponse.setContent(startGameStatus);
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		return startGameResponse;
	}

	@PostMapping(value = "/next", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse nextQuestion(@RequestParam int gamePIN, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse nextQuestionResponse = new GameApiResponse();
		Game game = GameManager.getInstance().getGameByPIN(gamePIN);
		if (game != null) {
			String nextQuestion = game.nextQuestion();
			if (nextQuestion.equals(Game.OK)) {
				nextQuestionResponse.setType(GameApiResponse.GameCommandType.OK);
				nextQuestionResponse.setContent(game.getCurrentQuestion().toString());
			} else {
				nextQuestionResponse.setType(GameApiResponse.GameCommandType.REQUEST_ERROR);
				nextQuestionResponse.setContent(nextQuestion);
				res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			}
			return nextQuestionResponse;
		}
		res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		return null;
	}

	@PostMapping(value = "/remove", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameApiResponse removeGame(@RequestParam int gamePIN, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse removeResponse = new GameApiResponse();
		boolean removed = GameManager.getInstance().removeGame(gamePIN);
		if (removed) {
			removeResponse.setType(GameApiResponse.GameCommandType.GAME_REMOVED);
			removeResponse.setContent(Game.OK);
		} else {
			removeResponse.setType(GameApiResponse.GameCommandType.REQUEST_ERROR);
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		return removeResponse;
	}


	@Autowired
	public SimpMessageSendingOperations messagingTemplate;

	@Deprecated
	@PostMapping(value = "/testws")
	public void test(@RequestParam int gamePIN, @RequestParam String msg){
		Greeting greeting = new Greeting("next_question");
		messagingTemplate.convertAndSend("/game/" + gamePIN, greeting);
	}

}
