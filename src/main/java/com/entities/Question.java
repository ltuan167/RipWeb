package com.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Question")
public class Question {

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

}
