package com.model;

public class WsMessage {

	private WsMessageType type;
	private Object content;

	public enum WsMessageType {
		NEW_PLAYER,
		END_QUESTION,
		NEXT_QUESTION,
		END_GAME
	}

	public WsMessageType getType() { return type; }
	public void setType(WsMessageType type) {
		this.type = type;
	}

	public Object getContent() {
		return content;
	}
	public void setContent(Object content) {
		this.content = content;
	}

}
