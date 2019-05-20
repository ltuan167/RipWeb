package com.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import java.util.ArrayList;
import java.util.Collections;

public class Game implements Comparable<Game> {

	@Autowired
	public SimpMessageSendingOperations msg;

	private static final String TOPIC_PREFIX = "/game/";
	private String gameWsTopic;

	private Integer PIN;
	private boolean is_began = false;
	private ArrayList<Player> players = new ArrayList<>();
	private ArrayList<QuestionCollection> questions = new ArrayList<>();

	public Game() { this(GameManager.getPIN()); }
	public Game(Integer gamePIN) {
		this.PIN = gamePIN;
		gameWsTopic = TOPIC_PREFIX + gamePIN;
	}

	public boolean join(String sessionId) {
		Collections.sort(players);
		Player newPlayer = new Player(sessionId);
		int foundPlayerIdx = Collections.binarySearch(players, newPlayer);
		if (foundPlayerIdx == -1 && // player does not exist
			is_began == false) {    // game was not began
//			String topic = "/topic";
//			msg.convertAndSend("/topic/");
			System.out.println("[GAME #" + PIN + "] Player sessionId: " + sessionId + " joined!");
			return players.add(newPlayer);
		}
		return false;
	}

	private boolean broadcastMsg(Object msg2broadcast) {
		try {
			msg.convertAndSend(gameWsTopic, msg2broadcast);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	public Integer getPIN() { return PIN; }
	public void setPIN(Integer PIN) { this.PIN = PIN; }

	@Override
	public int compareTo(Game o) {
		return this.PIN.compareTo(o.PIN);
	}

}
