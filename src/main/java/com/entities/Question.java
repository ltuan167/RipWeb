package com.entities;

import javax.persistence.*;
import java.util.Random;

@Entity
@Table(name = "Question")
public class Question {

	private static final int DEFAULT_TIME = 100; //s
	private static final int SHUFFLE_COUNT = 10;
	private static final int ANSWER_COUNT = 4;

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "questionCollection_ID", referencedColumnName = "id")
	private QuestionCollection questionCollection_ID;

	@Column(name = "question", nullable = false, length = 150)
	private String question;

	@Column(name = "image", nullable = true, length = 100)
	private String image;

	@Column(name = "correctAnswer", nullable = false)
	private int correctAnswer;

	@Column(name = "time", nullable = false)
	private int time; // in secondsW

	@Column(name = "answer1", nullable = true, length = 45)
	private String answer1;
	@Column(name = "answer2", nullable = true, length = 45)
	private String answer2;
	@Column(name = "answer3", nullable = true, length = 45)
	private String answer3;
	@Column(name = "answer4", nullable = true, length = 45)
	private String answer4;

	@Transient
	private String[] answers = new String[4];

	public Question() {}

//	public Question(String question, int correctAnswer, String answer1, String answer2, String answer3, String answer4, int time) {
//		this(question, null, correctAnswer, answer1, answer2, answer3, answer4, time);
//	}
//
//	public Question(String question, String image, int correctAnswer, String answer1, String answer2, String answer3, String answer4) {
//		this(question, image, correctAnswer, answer1, answer2, answer3, answer4, DEFAULT_TIME);
//	}

//	public Question(String question, String image, int correctAnswer, String answer1, String answer2, String answer3, String answer4, int time) {
////		this.question = question;
////		this.image = image;
////		this.correctAnswer = correctAnswer;
////		this.answer1 = answer1;
////		this.answer2 = answer2;
////		this.answer3 = answer3;
////		this.answer4 = answer4;
////		this.time = time;
////	}

	private String getAnswerById(int idx) {
		if (idx >= 0 && idx < 4)
			switch (idx) {
				case 0:
					return answer1;
				case 1:
					return answer2;
				case 2:
					return answer3;
				case 3:
					return answer4;
			}
		return null;
	}

	public void shuffleAnwsers() { shuffleAnwsers(SHUFFLE_COUNT); }

	public void shuffleAnwsers(int shuffleCount) {
		Random random = new Random();
		int firstIdx, secondIdx;
		String tempAns;
		for (int i = 0; i < shuffleCount; i++) {
			firstIdx = random.nextInt(5);
			secondIdx = random.nextInt(5);
			tempAns  = this.answers[secondIdx];
			this.answers[secondIdx] = this.answers[firstIdx];
			this.answers[firstIdx] = tempAns;
			if (firstIdx == correctAnswer)
				correctAnswer = secondIdx;
		}
		for (int i = 0; i < 4; i++)
			setAnswer(i, this.answers[i]);
	}

	public boolean isCorrectedAnswer(int answerIdx) { return answerIdx == correctAnswer; }

	public int getId() {return id;}
	public void setId(int id) {this.id = id;}

	public QuestionCollection getQuestionCollection_ID() {return questionCollection_ID;}
	public void setQuestionCollection_ID(QuestionCollection questionCollection_ID) {this.questionCollection_ID = questionCollection_ID;}

	public String getQuestion() {return question;}
	public void setQuestion(String question) {this.question = question;}

	public String getImage() {return image;}
	public void setImage(String image) {this.image = image;}

	public int getCorrectAnswer() {return correctAnswer;}
	public void setCorrectAnswer(int correctAnswer) {this.correctAnswer = correctAnswer;}

	public int getTime() {return time;}
	public void setTime(int time) {this.time = time;}

//	public String getAnswer1() {return answer1;}
//	public void setAnswer1(String answer1) {this.answer1 = answer1;}
//	public String getAnswer2() {return answer2;}
//	public void setAnswer2(String answer2) {this.answer2 = answer2;}
//	public String getAnswer3() {return answer3;}
//	public void setAnswer3(String answer3) {this.answer3 = answer3;}
//	public String getAnswer4() {return answer4;}
//	public void setAnswer4(String answer4) {this.answer4 = answer4;}

	public String[] getAnwsers() { return this.answers; }
	public void setAnwsers(String[] anwsers) {
		if (anwsers.length == ANSWER_COUNT) {
			this.answers = anwsers;
			for (int i = 0; i < 4; i++)
				setAnswer(i, this.answers[i]);
		}
	}
	public void setAnswer(int idx, String answer) {
		if (idx >= 0 && idx < 4) {
			this.answers[idx] = answer;
			switch (idx) {
				case 0:
					this.answer1 = answer;
					break;
				case 1:
					this.answer2 = answer;
					break;
				case 2:
					this.answer3 = answer;
					break;
				case 3:
					this.answer4 = answer;
					break;
			}
		}
	}

	@Override
	public String toString() {
		return String.format("{question: \"%s\", correctAnswer: \"%d\", image: \"%s\"\n" +
				"answer1: \"%s\"\nanswer2: \"%s\"\nanswer3: \"%s\"\nanswer4: \"%s\"\n", this.question, this.correctAnswer, this.image, this.answer1, this.answer2, this.answer3, this.answer4);
	}

}
