package com.example.demo.controller;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "keywordcountsix")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, 
        allowGetters = true)
public class KeywordCountSix {
	@Id
	String keywordsection;
	String keyword;
	String section;
	int count ;
	public KeywordCountSix(String keywordsection, String keyword, String section, int count) {
		super();
		this.keywordsection = keywordsection;
		this.keyword = keyword;
		this.section = section;
		this.count = count;
	}
	public String getKeywordsection() {
		return keywordsection;
	}
	public void setKeywordsection(String keywordsection) {
		this.keywordsection = keywordsection;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
	

}
