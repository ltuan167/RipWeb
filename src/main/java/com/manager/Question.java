package com.manager;

import java.util.Random;

public class Question {

	private static final int SHUFFLE_COUNT = 10;

	private String question;
	private String img;
	private int correctAnswer;
	private String[] anwsers = new String[4];

	public void shuffleAnwsers() { shuffleAnwsers(SHUFFLE_COUNT); }

	public void shuffleAnwsers(int shuffleCount) {
		Random random = new Random();
		int firstIdx, secondIdx;
		String tempAns;
		for (int i = 0; i < shuffleCount; i++) {
			firstIdx = random.nextInt(5);
			secondIdx = random.nextInt(5);
			tempAns  = anwsers[secondIdx];
			anwsers[secondIdx] = anwsers[firstIdx];
			anwsers[firstIdx] = tempAns;
			if (firstIdx == correctAnswer)
				correctAnswer = secondIdx;
		}
	}

	public boolean isCorrectedAnwser(int answerIdx) { return answerIdx == correctAnswer; }

	public String getQuestion() { return question; }
	public void setQuestion(String question) { this.question = question; }

	public String getImg() { return img; }
	public void setImg(String img) { this.img = img; }

	public int getCorrectAnswer() { return correctAnswer; }

	public void setCorrectAnswer(int correctAnswer) { this.correctAnswer = correctAnswer; }

	public String[] getAnwsers() { return anwsers; }

	public void setAnwsers(String[] anwsers) { this.anwsers = anwsers; }
	public void setAnwser(int idx, String anwsers) { if (idx >= 0 && idx <= 4) this.anwsers[idx] = anwsers; }

}
