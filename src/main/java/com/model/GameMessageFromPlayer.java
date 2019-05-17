package com.model;

public class GameMessageFromPlayer {
	private GameMessageFromPlayerType type;
	private String content;

	public enum GameMessageFromPlayerType {
		JOIN,       // {type: "JOIN", content: ""}
		SUBMIT
	}

	public GameMessageFromPlayerType getType() {
		return type;
	}
	public void setType(GameMessageFromPlayerType type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
}
