package com.manager;

import java.util.ArrayList;

public class Game {

	private int PIN;
	private ArrayList<Player> playerList = new ArrayList<>();

	public Game() {
		this.PIN = GameManager.getPIN();
	}


}
