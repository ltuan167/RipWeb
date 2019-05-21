package com.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import java.util.ArrayList;
import java.util.Collections;

public class Game implements Comparable<Game> {

	@Autowired
	public SimpMessageSendingOperations msg;

	public static final String PLAYER_EXISTED = "Player is existed!";
	public static final String GAME_STARTED = "Game is already started!";
	public static final String OK = "OK";

	private static final String TOPIC_PREFIX = "/game/";
	private String gameWsTopic;

	private Integer PIN;
	private boolean is_began = false;
	private int questionCollectionId;
	private ArrayList<Player> players = new ArrayList<>();
	private ArrayList<QuestionCollection> questions = new ArrayList<>();

	public Game(Integer questionCollectionId) { this(GameManager.generatePIN(), questionCollectionId); }
	public Game(Integer gamePIN, Integer questionCollectionId) {
		this.PIN = gamePIN;
		this.questionCollectionId = questionCollectionId;
		this.gameWsTopic = TOPIC_PREFIX + gamePIN;
	}

	public String join(String sessionId, String nickname) {
		Collections.sort(players);
		Player newPlayer = new Player(sessionId, nickname);
		int foundPlayerIdx = Collections.binarySearch(players, newPlayer);
		if (foundPlayerIdx != -1)
			return PLAYER_EXISTED;
		if (is_began)
			return GAME_STARTED;

		players.add(newPlayer);
		System.out.println("[GAME #" + PIN + "] " + newPlayer +" joined!");
		return OK;
	}

	public String begin() {
		// Broadcast notice begin game
		return OK;
	}

	public String nextQuestion() {
		// Broadcast notice next question
		return OK;
	}

	public String end() {
		// Broadcast notice end game
		return OK;
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

	@Override
	public  String toString() {
		return "Game: {gamePIN: " + PIN +", is_began: " + is_began + ", #players: " + players.size() + ", questionCollectionID: " + questionCollectionId + "}";
	}

}
