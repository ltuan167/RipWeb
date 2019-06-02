package com.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "User", //catalog = "spring_security",
        uniqueConstraints = @UniqueConstraint(columnNames = {"nickname", "email"}))
public class User {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "nickname", unique = true, length = 45)
	private String nickname;

	@Column(name = "email", unique = true, length = 70)
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "name", length = 50)
	private String name;

	@Column(name = "dob")
	private Date dob;

	@JsonBackReference
	@OneToMany(mappedBy = "owner_id", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<QuestionCollection> questionCollections;

	public User() {}

//	private String[] roles;

//	public String[] getRoles() {
//		return roles;
//	}
//	public void setRoles(String[] roles) {
//		this.roles = roles;
//	}

	public int getId() { return id;}
	public void setId(int id) {this.id = id;}

	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }

	public String getUsername() { return nickname; }
	public String getNickname() { return nickname; }
	public void setNickname(String username) { this.nickname = username; }

	public String getPassword() { return password; }
	public void setPassword(String password) { this.password = password; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public Date getDob() { return dob; }
	public void setDob(Date dob) { this.dob = dob; }

	public Set<QuestionCollection> getQuestionCollections() { return questionCollections; }

//	public List<GrantedAuthority> getAuthorities() {
//		List<GrantedAuthority> authorities = new ArrayList<>();
//		for (String role : roles) {
//			authorities.add(new SimpleGrantedAuthority(role));
//		}
//		return authorities;
//	}

}
