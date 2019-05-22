package com.manager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Singleton Games Manager
 */
public class GameManager {

	private static GameManager instance;

	private List<Game> games = Collections.synchronizedList(new ArrayList<Game>());

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
	public Integer createNewGame(Integer questionCollectionId) {
		Game newGame = new Game(questionCollectionId);
		games.add(newGame);
		synchronized (games) {
			Collections.sort(games);
		}
		System.out.println("[GAME MANAGER] Created " + newGame);
		return newGame.getPIN();
	}

	public boolean removeGame(Integer gamePIN) {
		Game game2remove = new Game(gamePIN, -1);
		System.out.println("[GAME MANAGER] Removed " + game2remove);
		return games.remove(game2remove);
	}

	/**
	 * Generate PIN for new Game
	 * @return Generated PIN
	 */
	public synchronized int generatePIN() {
		if (games.size() > 1)
			for (int i = 0; i < games.size()-1; i++) {
				Game game1 = games.get(i);
				Game game2 = games.get(i+1);
				if (game2.getPIN()-game1.getPIN() > 1)
					return game1.getPIN() + 1;
			}
		return games.size() + 1;
	}

	/**
	 * Request joining Game with gamePIN
	 * @param sessionId JSessionID from HTTPServletRequest
	 * @param gamePIN Game PIN
	 * @param nickname Player nickname
	 * @return GamePIN if successfully
	 */
	public String joinGame(String sessionId, Integer gamePIN, String nickname) {
		synchronized (games) {
			int gameFoundIdx = Collections.binarySearch(games, new Game(gamePIN, -1));
			if (gameFoundIdx >= 0) {    // Found game
				Game game2join = games.get(gameFoundIdx);
				return game2join.join(sessionId, nickname);   // return true if joined to game
			}
			return "Does not found Game PIN!";
		}
	}

}
