package com.manager;

import java.util.ArrayList;

public class GameManager {

	private static ArrayList<Game> gameList = new ArrayList<>();

	public static Game createNewGame(String testId) {
		return new Game();
	}

	public static int getPIN() {
		return gameList.size() + 1;
	}

}
