package com.example.demo.controller;

public class LoginUser {
	
	String username ;
	String password ;
	LoginUser ()
	{
		
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LoginUser(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	

}
