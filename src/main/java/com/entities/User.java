package com.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "User", catalog = "spring_security",
		uniqueConstraints = @UniqueConstraint(columnNames = {"nickname", "email"}))
public class User {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "nickname", unique = true)
	private String nickname;

	@Column(name = "email", unique = true)
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "name")
	private String name;

	@Column(name = "dob")
	private Date dob;

	public User() {}

	public int getId() { return id;}
	public void setId(int id) {this.id = id;}

	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }

	public String getNickname() { return nickname; }
	public void setNickname(String username) { this.nickname = username; }

	public String getPassword() { return password; }
	public void setPassword(String password) { this.password = password; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public Date getDob() { return dob; }
	public void setDob(Date dob) { this.dob = dob; }

}
