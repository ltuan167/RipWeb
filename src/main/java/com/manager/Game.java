package com.manager;

import com.config.BeanUtil;
import com.dao.QuestionCollectionDAO;
import com.entities.QuestionCollection;
import com.model.GameApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import java.util.ArrayList;
import java.util.Collections;

public class Game implements Comparable<Game> {

	@Autowired
	public SimpMessageSendingOperations msg = BeanUtil.getBean(SimpMessageSendingOperations.class);

	@Autowired
	public QuestionCollectionDAO questionCollectionDAO = BeanUtil.getBean(QuestionCollectionDAO.class);

	private QuestionCollection questionCollection;

	public static final String PLAYER_EXISTED = "Player is existed!";
	public static final String GAME_STARTED = "Game is already started!";
	public static final String OK = "OK";

	private static final String TOPIC_PREFIX = "/game/";
	private String gameWsTopic;

	private Integer PIN;
	private boolean is_began = false;
	private int questionCollectionId;
	private ArrayList<Player> players = new ArrayList<>();

//	public Set<Question> getQuestions() { return questions; }
//	public void setQuestions(Set<Question> questions) { this.questions = questions; }

//	private Set<Question> questions = new HashSet<>();

	public Game(Integer questionCollectionId) {
		this(-1, questionCollectionId);
		int generatedPIN = GameManager.getInstance().generatePIN();
		if (generatedPIN <= GameManager.MAX_GAME_COUNT)  // out of Game slot
			this.PIN = generatedPIN;
	}

	public Game(Integer gamePIN, Integer questionCollectionId) {
		this.PIN = gamePIN;
		this.questionCollectionId = questionCollectionId;
		this.gameWsTopic = TOPIC_PREFIX + gamePIN;
		// Load Questions
		QuestionCollection questionCollectionX = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
		if (questionCollectionX != null)
			this.questionCollection = questionCollectionX;
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
		GameApiResponse beginGameCommand = new GameApiResponse();
		beginGameCommand.setType(GameApiResponse.GameCommandType.BEGIN_GAME);
		broadcastMsg(beginGameCommand);
		return OK;
	}

	public String nextQuestion() {
		// Broadcast notice next question
		GameApiResponse nextQuestionCommand = new GameApiResponse();
		nextQuestionCommand.setType(GameApiResponse.GameCommandType.NEXT_QUESTION);
		broadcastMsg(nextQuestionCommand);
		return OK;
	}

	public String end() {
		// Broadcast notice end game
		GameApiResponse endCommand = new GameApiResponse();
		endCommand.setType(GameApiResponse.GameCommandType.END_GAME);
		broadcastMsg(endCommand);
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

	public QuestionCollection getQuestionCollection() { return questionCollection; }
	public void setQuestionCollection(QuestionCollection questionCollection) { this.questionCollection = questionCollection; }

	@Override
	public int compareTo(Game o) {
		return this.PIN.compareTo(o.PIN);
	}

	@Override
	public  String toString() {
		return "Game: {gamePIN: " + PIN +", is_began: " + is_began + ", #players: " + players.size() + ", questionCollection: " + this.questionCollection + "}";
	}

}
