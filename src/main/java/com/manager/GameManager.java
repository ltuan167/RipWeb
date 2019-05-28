package com.manager;

import java.util.*;

/**
 * Singleton Games Manager
 */
public class GameManager {

	private static GameManager instance;

	private static List<Game> games = Collections.synchronizedList(new ArrayList<Game>());
	private static Stack<Integer> availablePINs = new Stack<>();
	private static int nextPIN = 1;
	public static final int MAX_GAME_COUNT = 100000;

	private GameManager() {}

	public static GameManager getInstance() {
		if (instance == null)
			instance = new GameManager();
		return instance;
	}

	/**
	 * Create new Game with question collection ID
	 * @param questionCollectionId Question Collection ID
	 * @return Created Game PIN
	 */
	public synchronized Integer createNewGame(Integer questionCollectionId) {
		Game newGame = new Game(questionCollectionId);
		int newGamePIN = newGame.getPIN();
		if (newGamePIN > 0) {
			games.add(newGame);
			Collections.sort(games);
			System.out.println("[GAME MANAGER] Created " + newGame);
		}
		return newGamePIN;
	}

	public synchronized boolean removeGame(Integer gamePIN) {
		Game game2remove = new Game(gamePIN, -1);
		int game2removeIdx = Collections.binarySearch(games, game2remove);
		System.out.println("[GAME MANAGER] Removed " + game2remove);
		Game removedGame = games.remove(game2removeIdx);
		if (removedGame != null) {
			availablePINs.push(removedGame.getPIN());
			return true;
		}
		return false;
	}

	/**
	 * Generate PIN for new Game
	 * @return Generated PIN
	 */
	public synchronized int generatePIN() {
		return availablePINs.isEmpty() ? nextPIN++ : availablePINs.pop();
	}

	/**
	 * Request joining Game with gamePIN
	 * @param sessionId JSessionID from HTTPServletRequest
	 * @param gamePIN Game PIN
	 * @param nickname Player nickname
	 * @return GamePIN if successfully
	 */
	public synchronized String joinGame(String sessionId, Integer gamePIN, String nickname) {
		int gameFoundIdx = Collections.binarySearch(games, new Game(gamePIN, -1));
		if (gameFoundIdx >= 0) {    // Found game
			Game game2join = games.get(gameFoundIdx);
			return game2join.join(sessionId, nickname);   // return true if joined to game
		}
		return "Does not found Game PIN!";
	}

}
