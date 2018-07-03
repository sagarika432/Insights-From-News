package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RequestMethod;  
import org.springframework.web.bind.annotation.RestController;  
import java.util.List;  
import java.util.Optional;  


@RestController  
public class ArticleController {
	
	@Autowired  
    private ArticleService articleService;  
	
	
	@RequestMapping("/")  
    public  String  getAllArticle(){  
        return " Hello "; 
    }     
	
	
	
    @RequestMapping(value="/add-Article", method=RequestMethod.POST)  
    public void addArticle(@RequestBody Article article){  
        articleService.addArticle(article);  
    }  
    
    
    
    @RequestMapping(value="/Article/{id}", method=RequestMethod.GET)  
    public Optional<Article> getArticle(@PathVariable String id){  
        return articleService.getArticle(id);  
    }  
	
	
	

}
