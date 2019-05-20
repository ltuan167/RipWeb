package com.manager;

public class Player implements Comparable<Player> {

	private String sessionId;
	private Integer score = 0;

	public Player(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getSessionId() { return sessionId; }
	public void setSessionId(String sessionId) { this.sessionId = sessionId; }

	public Integer getScore() {	return score; }
	public void setScore(Integer score) { this.score = score; }


	@Override
	public int compareTo(Player o) {
		return this.sessionId.compareTo(o.sessionId);
	}
}
