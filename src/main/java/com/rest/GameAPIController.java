package com.rest;

import com.manager.GameManager;
import com.model.GameCommandMessage;
import org.springframework.web.bind.annotation.*;

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
	public GameCommandMessage joinGame(@RequestParam int gamePIN) {
		GameCommandMessage joinResponse = new GameCommandMessage();
		joinResponse.setType(GameCommandMessage.GameCommandType.BEGIN_GAME);
		joinResponse.setContent("Hello to game #"+gamePIN);
		return joinResponse;
	}

}
