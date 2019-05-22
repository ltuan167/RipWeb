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
	public GameCommandMessage createNewGame(@RequestParam int questionCollectionId) {
		GameCommandMessage createResponse = new GameCommandMessage();
		Integer createdGamePIN = GameManager.createNewGame(questionCollectionId);
		createResponse.setType(GameCommandMessage.GameCommandType.GAME_CREATED);
		createResponse.setContent(String.valueOf(createdGamePIN));
		return createResponse;
	}

	@PostMapping(value = "/join", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameCommandMessage joinGame(@RequestParam int gamePIN, @RequestParam String nickname, HttpServletRequest req) {
		GameCommandMessage joinResponse = new GameCommandMessage();
		String joined = GameManager.joinGame(req.getSession().getId(), gamePIN, nickname);
		if (joined != null && joined.equals(Game.OK)) {
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_ACCEPTED);
			joinResponse.setContent(String.valueOf(gamePIN));
		} else {
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_DENIED);
			joinResponse.setContent(joined);
		}
		return joinResponse;
	}

	@PostMapping(value = "/remove", produces = MediaType.APPLICATION_JSON_VALUE)
	public GameCommandMessage removeGame(@RequestParam int gamePIN, HttpServletRequest req, HttpServletResponse res) {
		GameCommandMessage removeResponse = new GameCommandMessage();
		boolean removed = GameManager.removeGame(gamePIN);
		if (removed) {
			removeResponse.setType(GameCommandMessage.GameCommandType.GAME_REMOVED);
			removeResponse.setContent(Game.OK);
		} else {
			res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			removeResponse.setType(GameCommandMessage.GameCommandType.REQUEST_ERROR);
		}
		return removeResponse;
	}

}
