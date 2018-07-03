package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.GuardianContentApi;
import com.example.demo.Response;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.util.ArrayList;
import java.util.List;

@RestController  
public class HomeController {
	@Autowired
	private ArticleService articleService;
	 @RequestMapping("/hello")  
	    public Response hello() throws ParseException, UnirestException{  
		 
			final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		    GuardianContentApi api = new GuardianContentApi("5aa197ac-a8be-43f3-bc2a-f50a097c4c27");
		    api.setSection("business");
		    api.setFromDate(dateFormat.parse("22/07/2016"));
		    api.setToDate(dateFormat.parse("22/07/2017"));
		    Response response = api.getContent("bitcoin");

		 int i ;
		 Article temp [] = response.getResults();
		 for(i=0 ;i< temp.length ;i++)
			 articleService.addArticle(temp[i]);
		 
	       return response;
	    }
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/gst/allsectionscount")
	 public ArrayList<ArticleSection> fun () throws ParseException, UnirestException
	 {
		 ArrayList <ArticleSection> temp = new ArrayList();
		 temp.add(new ArticleSection("business",39251));
		 temp.add(new ArticleSection("banking",17579));
		 temp.add(new ArticleSection("finance",8948));
		 temp.add(new ArticleSection("tech",7050));
		 temp.add(new ArticleSection("editorial or opinions",13263));
		 return temp;
	 }
	 
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/allkey")
	 public List<Article> fun2 ()
	 {
		 return articleService.getAllArticles();
	 }
	 
	 
}
