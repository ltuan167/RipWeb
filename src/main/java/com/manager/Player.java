package com.manager;

/**
 * Player in Gamer
 */
public class Player implements Comparable<Player> {

	private String sessionId;
	private String nickname;
	private Integer score = 0;

	/**
	 * Player constructor
	 * @param sessionId JSessionID
	 * @param nickname nickname
	 */
	public Player(String sessionId, String nickname) {
		this.nickname = nickname;
		this.sessionId = sessionId;
	}

	public String getSessionId() { return sessionId; }
	public void setSessionId(String sessionId) { this.sessionId = sessionId; }

	public String getNickname() { return nickname; }
	public void setNickname(String nickname) { this.nickname = nickname; }

	public Integer getScore() {	return score; }
	public void setScore(Integer score) { this.score = score; }

	@Override
	public int compareTo(Player o) {
		return this.nickname.equalsIgnoreCase(o.nickname) ? 0 : this.sessionId.compareTo(o.sessionId);
	}

	@Override public String toString() {
		return "Player: {sessionId: " + sessionId + ", nickname: " + nickname + ", score: " + score + "}";
	}
}
