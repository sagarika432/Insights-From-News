package com.example.demo.controller;

public class ArticleSection {
	
	String name;
	int value; ;
	
	public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public int getvalue() {
		return value;
	}
	public void setvalue(int value) {
		this.value = value;
	}
	public ArticleSection( String name, int value) {
		super();
		
		this.name = name;
		this.value = value;
	}
	

}
