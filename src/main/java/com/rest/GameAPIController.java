package com.rest;

import com.manager.GameManager;
import com.model.GameCommandMessage;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/1.0/game")
public class GameAPIController {

	@GetMapping
	public String greetingToGameAPI() {
		return "Welcome to GAME APIs!";
	}

	@PostMapping(value = "/create", produces = "application/json")
	public GameCommandMessage createNewGame(@RequestParam int questionCollectionId) {
		GameCommandMessage createResponse = new GameCommandMessage();
		Integer createdGamePIN = GameManager.createNewGame(questionCollectionId);
		createResponse.setType(GameCommandMessage.GameCommandType.GAME_CREATED);
		createResponse.setContent(String.valueOf(createdGamePIN));
		return createResponse;
	}

	@PostMapping(value = "/join", produces = "application/json")
	public GameCommandMessage joinGame(@RequestParam int gamePIN, HttpServletRequest req) {
		GameCommandMessage joinResponse = new GameCommandMessage();
//		if (req.getSession().getAttribute("isInGame") == null)
		boolean joined = GameManager.joinGame(req.getSession().getId(), gamePIN);
		if (joined) {
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_ACCEPTED);
			joinResponse.setContent(String.valueOf(gamePIN));
		} else
			joinResponse.setType(GameCommandMessage.GameCommandType.JOIN_DENIED);
		return joinResponse;
	}

}
