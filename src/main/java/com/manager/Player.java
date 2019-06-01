package com.manager;

/**
 * Player in Gamer
 */
public class Player implements Comparable<Player> {

	private String sessionId;
	private String nickname;
	private Integer score = 0;
	private boolean is_previous_correct = false;
	private Integer baseAddScore = 100;
	private Integer bonusAddScore = 0;
	private float bonus_percentage = 0.0f;

	/**
	 * Player constructor
	 * @param sessionId JSessionID
	 * @param nickname nickname
	 */
	public Player(String sessionId, String nickname) {
		this.nickname = nickname;
		this.sessionId = sessionId;
	}

	public int correctThisQuestion(float bonusTimePercentage) {
		if (is_previous_correct) {
			bonus_percentage += 0.2f;
			this.bonusAddScore = Math.round(baseAddScore * bonus_percentage);
		}
		this.score = Math.round(this.baseAddScore + this.bonusAddScore + this.baseAddScore*bonusTimePercentage);
		is_previous_correct = true;
		System.out.println("[SUBMITTED CORRECT]" + this);
		return this.score;
	}

	public int wrongThisQuestion() {
		bonus_percentage = 0f;
		is_previous_correct = false;
		System.out.println("[SUBMITTED WRONG]" + this);
		return this.score;
	}

	public String getSessionId() { return sessionId; }
	public void setSessionId(String sessionId) { this.sessionId = sessionId; }

	public String getNickname() { return nickname; }
	public void setNickname(String nickname) { this.nickname = nickname; }

	public Integer getScore() {	return score; }
	public void setScore(Integer score) { this.score = score; }

	public Integer getBaseAddScore() { return baseAddScore; }
	public Integer getBonusAddScore() { return bonusAddScore; }

	@Override
	public int compareTo(Player o) {
		return this.nickname.equalsIgnoreCase(o.nickname) ? 0 : this.sessionId.compareTo(o.sessionId);
	}

	@Override public String toString() {
		return "Player: {sessionId: " + sessionId + ", nickname: " + nickname + ", score: " + score + "}";
	}
}
