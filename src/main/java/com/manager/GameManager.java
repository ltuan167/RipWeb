package com.manager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class GameManager {

	private static List<Game> games = Collections.synchronizedList(new ArrayList<Game>());

	public static Integer createNewGame(Integer questionCollectionId) {
		Game newGame = new Game();
		games.add(newGame);
		synchronized (games) {
			Collections.sort(games);
		}
		System.out.println("[GAME MANAGER] Created game PIN: " + newGame.getPIN());
		return newGame.getPIN();
	}

	public static int getPIN() {
		return games.size() + 1;
	}

	public static boolean joinGame(String sessionId, Integer gamePIN) {
		synchronized (games) {
			int gameFoundIdx = Collections.binarySearch(games, new Game(gamePIN));
			if (gameFoundIdx >= 0) {
				Game game2join = games.get(gameFoundIdx);
				return game2join.join(sessionId);   // return true if joined to game
			}
			return false;
		}
	}

}
