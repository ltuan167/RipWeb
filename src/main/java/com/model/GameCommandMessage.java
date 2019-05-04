package com.model;

public class GameCommandMessage {
	private GameCommandType type;
	private String content;

	public enum GameCommandType {
		JOIN_ACCEPTED,          // {type: "JOIN_ACCEPTED", content: "{playerList}"}
		BEGIN_GAME,             // {type: "BEGIN_GAME", content: ""}
		SUBMIT_ACCEPTED,        // {type: "SUBMIT_ACCEPTED", content: ""} -> wait screen until NEXT_QUESTION command
		NEXT_QUESTION,          // {type: "NEXT_QUESTION", content: "{#questions}"} -> show screen with button corresponding to number in content
		END_GAME                       // {type: "END_GAME", content: ""} -> Just notice for JS to end the game (not a name of the move)
	}

	public GameCommandType getType() {
		return type;
	}
	public void setType(GameCommandType type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
}
