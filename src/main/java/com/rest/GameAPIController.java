package com.rest;

import com.manager.Game;
import com.manager.GameManager;
import com.model.GameCommandMessage;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;

@RestController
@RequestMapping("/1.0/game")
public class GameAPIController {

	@GetMapping
	public String greetingToGameAPI() {
		return "Welcome to GAME APIs!";
	}

	@PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameCommandMessage createNewGame(@RequestParam int questionCollectionId, HttpServletRequest req, HttpServletResponse res) {
		GameCommandMessage createResponse = new GameCommandMessage();
		Integer createdGamePIN = GameManager.getInstance().createNewGame(questionCollectionId);
		if (createdGamePIN > 0) {
			createResponse.setType(GameCommandMessage.GameCommandType.GAME_CREATED);
			createResponse.setContent(String.valueOf(createdGamePIN));
			res.setStatus(HttpServletResponse.SC_CREATED);
		} else {
			createResponse.setType(GameCommandMessage.GameCommandType.REQUEST_ERROR);
			createResponse.setContent("The server is too busy!");
			res.setStatus(HttpServletResponse.SC_EXPECTATION_FAILED);
		}
		return createResponse;
	}

	@PostMapping(value = "/join", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameCommandMessage joinGame(@RequestParam int gamePIN, @RequestParam String nickname, HttpServletRequest req, HttpServletResponse res) {
		GameCommandMessage joinResponse = new GameCommandMessage();
		String joined = GameManager.getInstance().joinGame(req.getSession().getId(), gamePIN, nickname);
		if (joined != null && joined.equals(Game.OK)) {
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_ACCEPTED);
			joinResponse.setContent(String.valueOf(gamePIN));
			res.setStatus(HttpServletResponse.SC_ACCEPTED);
		} else {
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_DENIED);
			joinResponse.setContent(joined);
			res.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		}
		return joinResponse;
	}

	@PostMapping(value = "/remove", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameCommandMessage removeGame(@RequestParam int gamePIN, HttpServletRequest req, HttpServletResponse res) {
		GameCommandMessage removeResponse = new GameCommandMessage();
		boolean removed = GameManager.getInstance().removeGame(gamePIN);
		if (removed) {
			removeResponse.setType(GameCommandMessage.GameCommandType.GAME_REMOVED);
			removeResponse.setContent(Game.OK);
		} else {
			removeResponse.setType(GameCommandMessage.GameCommandType.REQUEST_ERROR);
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
		return removeResponse;
	}

}
