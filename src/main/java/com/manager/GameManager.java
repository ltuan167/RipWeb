package com.manager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Singleton Games Manager
 */
public class GameManager {

	private static List<Game> games = Collections.synchronizedList(new ArrayList<Game>());

	/**
	 * Create new Game with question collection ID
	 * @param questionCollectionId Question Collection ID
	 * @return Created Game PIN
	 */
	public static Integer createNewGame(Integer questionCollectionId) {
		Game newGame = new Game(questionCollectionId);
		games.add(newGame);
		synchronized (games) {
			Collections.sort(games);
		}
		System.out.println("[GAME MANAGER] Created " + newGame);
		return newGame.getPIN();
	}

	/**
	 * Generate PIN for new Game
	 * @return Generated PIN
	 */
	public static int generatePIN() {
		return games.size() + 1;
	}

	/**
	 * Request joining Game with gamePIN
	 * @param sessionId JSessionID from HTTPServletRequest
	 * @param gamePIN Game PIN
	 * @param nickname Player nickname
	 * @return GamePIN if successfully
	 */
	public static String joinGame(String sessionId, Integer gamePIN, String nickname) {
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
