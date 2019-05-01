package com.controller;

import com.model.GameCommandMessage;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/game")
public class GameAPIController {

	@GetMapping
	public String greetingToGameAPI() {
		return "Welcome to GAME APIs!";
	}

	@PostMapping(value = "/join", produces = "application/json")
	public GameCommandMessage getGame(@RequestParam int gamePIN) {
		GameCommandMessage command = new GameCommandMessage();
		command.setType(GameCommandMessage.GameCommandType.BEGIN_GAME);
		command.setContent("Hello to game #"+gamePIN);
		return command;
	}

}
