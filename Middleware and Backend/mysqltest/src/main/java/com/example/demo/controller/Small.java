package com.example.demo.controller;

public class Small {

	String username ;
	boolean value ;
	public Small ()
	{
		
	}
	public Small(String key, boolean value) {
		super();
		this.username = key;
		this.value = value;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username ;
	}
	public boolean isValue() {
		return value;
	}
	public void setValue(boolean value) {
		this.value = value;
	}
	
	
	
	
}
