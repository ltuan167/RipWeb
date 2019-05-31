package com.rest;

import com.manager.Game;
import com.manager.GameManager;
import com.model.GameApiResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	public GameApiResponse submitAnswer(@RequestParam int gamePIN, @RequestParam int questionId, @RequestParam int chooseAnsId, HttpServletRequest req, HttpServletResponse res) {
		GameApiResponse submittedResponse = new GameApiResponse();

		return submittedResponse;
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

}
