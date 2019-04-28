package com.classes;

public class Test {

	private Integer id;
	private Integer ownerId;
	private String  name;
	private String  description;

	public Test(Integer id) {
		this.id = id;
	}

	public Integer getId() {return id;}
	public void setId(Integer id) {this.id = id;}

	public Integer getOwnerId() {return ownerId;}
	public void setOwnerId(Integer ownerId) {this.ownerId = ownerId;}

	public String getName() {return name;}
	public void setName(String name) {this.name = name;}

	public String getDescription() {return description;}
	public void setDescription(String description) {this.description = description;}
}
