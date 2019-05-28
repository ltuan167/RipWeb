package com.entities;

import javax.persistence.*;

@Entity
@Table(name = "QuestionCollection")
public class QuestionCollection {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "owner_id", referencedColumnName = "id")
	private User owner_id;

	@Column(name = "name", nullable = false, length = 50)
	private String name;

	@Column(name = "description", nullable = true, length = 100)
	private String description;

}
