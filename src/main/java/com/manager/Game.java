package com.manager;

import com.config.BeanUtil;
import com.dao.QuestionCollectionDAO;
import com.entities.Question;
import com.entities.QuestionCollection;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.model.GameApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;

public class Game implements Comparable<Game> {

	@Autowired
	public SimpMessageSendingOperations msg = BeanUtil.getBean(SimpMessageSendingOperations.class);

	@Autowired
	public QuestionCollectionDAO questionCollectionDAO = BeanUtil.getBean(QuestionCollectionDAO.class);

	private QuestionCollection questionCollection;
	private Iterator<Question> questionsIterator;
	private Question currentQuestion;

	public static final String PLAYER_EXISTED = "Player is existed!";
	public static final String GAME_STARTED = "Game is already started!";
	public static final String CANNOT_PARSE_JSON = "Can not parse JSON!";
	public static final String OK = "OK";

	private static final String TOPIC_PREFIX = "/game/";
	private static final String HOST_TOPIC_POSTFIX = "/host";
	private String gameWsTopic;

	private Integer PIN;
	private boolean is_began = false;
	private long began_question_time = 0;
	private HashMap<String, Player> players = new HashMap<>();

	public Game(Integer questionCollectionId) {
//		this(-1, questionCollectionId);
		int generatedPIN = GameManager.getInstance().generatePIN();
		if (generatedPIN <= GameManager.MAX_GAME_COUNT) { // out of Game slot
			this.PIN = generatedPIN;
			this.gameWsTopic = TOPIC_PREFIX + this.PIN;
				// Load Questions
		if (questionCollectionId >= 0) {
			QuestionCollection questionCollectionX = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
			if (questionCollectionX != null)
				this.questionCollection = questionCollectionX;
			this.gameWsTopic = TOPIC_PREFIX + this.PIN;
			// Load Questions
			if (questionCollectionId >= 0) {
				QuestionCollection questionCollectionX = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
				if (questionCollectionX != null)
					this.questionCollection = questionCollectionX;
			}
		}
	}

	public Game(Integer gamePIN, Integer questionCollectionId) {
		this.PIN = gamePIN;
//		this.questionCollectionId = questionCollectionId;
//		this.gameWsTopic = TOPIC_PREFIX + gamePIN;
//		// Load Questions
//		if (questionCollectionId >= 0) {
//			QuestionCollection questionCollectionX = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
//			if (questionCollectionX != null)
//				this.questionCollection = questionCollectionX;
//		}
	}

//	public Game(Integer gamePIN, Integer questionCollectionId) {
//			this.PIN = gamePIN;
////		this.questionCollectionId = questionCollectionId;
//			this.gameWsTopic = TOPIC_PREFIX + gamePIN;
//			// Load Questions
//			if (questionCollectionId >= 0) {
//				QuestionCollection questionCollectionX = questionCollectionDAO.getQuestionCollectionById(questionCollectionId);
//				if (questionCollectionX != null)
//					this.questionCollection = questionCollectionX;
//			}
//	}

	public String join(String sessionId, String nickname) {
//		Collections.sort(players);
		Player newPlayer = new Player(sessionId, nickname);
		if (players.containsKey(sessionId))
			return PLAYER_EXISTED;
		if (is_began)
			return GAME_STARTED;

		players.put(newPlayer.getSessionId(), newPlayer);
		System.out.println("[GAME #" + PIN + "] " + newPlayer +" joined!");
		return OK;
	}

	public String startGame() {
		// Broadcast notice begin game
		if (is_began == false) {
			is_began = true;
			questionsIterator = getQuestionCollection().getQuestions().iterator();
		}
		return nextQuestion();
	}

	private ObjectMapper objectMapper = new ObjectMapper();
	public String nextQuestion() {
		// Broadcast notice next question
		if (questionsIterator.hasNext()) {
			GameApiResponse nextQuestionCommand = new GameApiResponse();
			nextQuestionCommand.setType(GameApiResponse.GameCommandType.NEXT_QUESTION);
			currentQuestion = questionsIterator.next();
//			try {
////				nextQuestionCommand.setContent(objectMapper.writeValueAsString(currentQuestion));
////			} catch (JsonProcessingException e) {
////				e.printStackTrace();
////				return CANNOT_PARSE_JSON;
////			}
			broadcastMsg(nextQuestionCommand);
			began_question_time = System.currentTimeMillis();
			return OK;
		} else {    // NO MORE QUESTIONS
			return endGame();
		}
	}

	public String endGame() {
		// Broadcast notice end game
		GameApiResponse endCommand = new GameApiResponse();
		endCommand.setType(GameApiResponse.GameCommandType.END_GAME);
		endCommand.setContent("[{nickname: \"player1\", score: \"69\"},{nickname: \"player2\", score: \"96\"}]");
		broadcastMsg(endCommand);
		return OK;
	}

	private boolean broadcastMsg(Object msg2broadcast) {
		try {
			System.out.println("Game WS Topic: " + gameWsTopic);
			msg.convertAndSend(gameWsTopic, msg2broadcast);
			return true;
		} catch (Exception e) {
			System.err.println("[broadcastMsg]" + e.getMessage());
			return false;
		}
	}

	private int validateAnswerAndGetScore(String sessionId, int questionId, int chooseAnswerId) {
		if (players.containsKey(sessionId)) {
			if (questionId == currentQuestion.getId()) {
				Player player = players.get(sessionId);
				if (chooseAnswerId == currentQuestion.getCorrectAnswer()) { // CORRECT ANSWER
					long time2Answer = System.currentTimeMillis() - began_question_time;
					float bonusTimePercentage = 1.0f - (float)time2Answer/(currentQuestion.getTime()*1000f);
					return player.correctThisQuestion(bonusTimePercentage); // get score
				} else
					return player.wrongThisQuestion();
			}
		}
		return -1;
	}

	private boolean sendMsg2Host(Object msg2host) {
		try {
			msg.convertAndSend(gameWsTopic + HOST_TOPIC_POSTFIX, msg2host);
			return true;
		} catch (Exception e) {
			System.err.println("[sendMsg2Host]" + e.getMessage());
			return false;
		}
	}

	public Integer getPIN() { return PIN; }
	public void setPIN(Integer PIN) { this.PIN = PIN; }

	public Question getCurrentQuestion() { return currentQuestion; }

	public QuestionCollection getQuestionCollection() { return questionCollection; }
//	public void setQuestionCollection(QuestionCollection questionCollection) { this.questionCollection = questionCollection; }

	@Override
	public int compareTo(Game o) {
		return this.PIN.compareTo(o.PIN);
	}

	@Override
	public  String toString() {
		return "Game: {gamePIN: " + PIN +", is_began: " + is_began + ", #players: " + players.size() + ", questionCollection: " + this.questionCollection + "}";
	}

}
