package com.entities;

import javax.persistence.*;

@Entity
@Table(name = "QuestionEntity")
public class QuestionEntity {

	private static final int DEFAULT_TIME = 100; //s

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

	public QuestionEntity() {}

//	public QuestionEntity(String question, int correctAnswer, String answer1, String answer2, String answer3, String answer4, int time) {
//		this(question, null, correctAnswer, answer1, answer2, answer3, answer4, time);
//	}
//
//	public QuestionEntity(String question, String image, int correctAnswer, String answer1, String answer2, String answer3, String answer4) {
//		this(question, image, correctAnswer, answer1, answer2, answer3, answer4, DEFAULT_TIME);
//	}

//	public QuestionEntity(String question, String image, int correctAnswer, String answer1, String answer2, String answer3, String answer4, int time) {
////		this.question = question;
////		this.image = image;
////		this.correctAnswer = correctAnswer;
////		this.answer1 = answer1;
////		this.answer2 = answer2;
////		this.answer3 = answer3;
////		this.answer4 = answer4;
////		this.time = time;
////	}

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

	public String getAnswer1() {return answer1;}
	public void setAnswer1(String answer1) {this.answer1 = answer1;}
	public String getAnswer2() {return answer2;}
	public void setAnswer2(String answer2) {this.answer2 = answer2;}
	public String getAnswer3() {return answer3;}
	public void setAnswer3(String answer3) {this.answer3 = answer3;}
	public String getAnswer4() {return answer4;}
	public void setAnswer4(String answer4) {this.answer4 = answer4;}

	@Override
	public String toString() {
//		ObjectMapper mapper = new ObjectMapper();
////		QuestionEntity question = super.clone();
//		try {
//			return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(super.clone());
//		} catch (JsonProcessingException e) {
//			e.printStackTrace();
//			return "Cannot processing exception";
//		}
////		} catch (CloneNotSupportedException e) {
////			e.printStackTrace();
////			return "Cannot clone";
////		}
		return String.format("{question: \"%s\", correctAnswer: \"%d\", image: \"%s\"\n" +
				"answer1: \"%s\"\nanswer2: \"%s\"\nanswer3: \"%s\"\nanswer4: \"%s\"\n", this.question, this.correctAnswer, this.image, this.answer1, this.answer2, this.answer3, this.answer4);
//		return this.question;

	}

}
