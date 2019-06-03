package com.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Set;

@Entity
@Table(name = "QuestionCollection")
public class QuestionCollection {

//	private static final int SHUFFLE_COUNT = 10;

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

	@OneToMany(mappedBy = "questionCollection_ID", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Question> questions;

	public QuestionCollection() {}

	@Override
	public String toString() {
		return Arrays.toString(this.questions.toArray());
	}

	public int getId() {return id;}
//	public void setId(int id) {this.id = id;}

	public User getOwner_id() {return owner_id;}
	public void setOwner_id(User owner_id) {this.owner_id = owner_id;}

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }

	public Set<Question> getQuestions() { return questions; }
	public void setQuestions(Set<Question> questions) { this.questions = questions;}

}
