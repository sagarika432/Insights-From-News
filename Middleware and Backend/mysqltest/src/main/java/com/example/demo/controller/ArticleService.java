package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;  
import java.util.ArrayList; 
import java.util.Optional;  
@Service
public class ArticleService {

	@Autowired  
	private ArticleRepository articleRepository;
	
	public List<Article> getAllArticles()
	{
		 List<Article> articlerecord = new ArrayList<>();  
	        articleRepository.findAll().forEach(articlerecord::add);  
	        return articlerecord;
	}
	public Optional<Article> getArticle(String id){  
       
		return articleRepository.findById(id);
		
    }  
    public void addArticle(Article article){  
        articleRepository.save(article);  
    }  
    public void deleteById(String id){  
        
        articleRepository.deleteById(id);
    }  
	
}
