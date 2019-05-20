package com.manager;

import java.util.ArrayList;
import java.util.Collections;


public class GameManager {

	private static ArrayList<Game> games = new ArrayList<>();

	public static Game createNewGame(String questionCollectionId) {
		Game newGame = new Game();
		games.add(newGame);
		return newGame;
	}

	public static int getPIN() {
		return games.size() + 1;
	}

	public static boolean joinGame(String sessionId, Integer gamePIN) {
		Collections.sort(games);
		int gameFoundIdx = Collections.binarySearch(games, new Game(gamePIN));
		if (gameFoundIdx >= 0) {
			Game game2join = games.get(gameFoundIdx);
			return game2join.join(sessionId);
		}
		return false;
	}

}
