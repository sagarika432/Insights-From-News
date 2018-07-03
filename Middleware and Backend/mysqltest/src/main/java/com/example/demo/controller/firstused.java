package com.example.demo.controller;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.GuardianContentApi;
import com.example.demo.Response;
import com.mashape.unirest.http.exceptions.UnirestException;
import java.util.ArrayList;
import java.util.List;


@RestController  
public class firstused {
	
	@Autowired
	private ArticleService articleService;
	
	 GuardianContentApi api = new GuardianContentApi("5aa197ac-a8be-43f3-bc2a-f50a097c4c27");
	
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/firstused/{keyword}")
	 public Article firstused (
			  @PathVariable String keyword) throws UnirestException
	 {
		 Response response = api.getFirstUsed(keyword);
		 
		Article  temp [] = response.getResults();
		return temp [0];
		 
	 }
	 
	 
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/mostused/{keyword}")
	 public Article mostused (
			  @PathVariable String keyword) throws UnirestException
	 {
		 Response response = api.getMostUsed(keyword);
		 
		Article  temp [] = response.getResults();
		return temp [0];
		 
	 }
	 
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/count6months/{keyword}")
	 public ArrayList<ArticleSection> fun (@PathVariable String keyword) throws ParseException, UnirestException
	 {
		
		 ArrayList <ArticleSection> temp = new ArrayList();
		 temp.add(new ArticleSection("business",api.countpast6(keyword, "business")));
		 temp.add(new ArticleSection("banking",api.countpast6(keyword, "banking")));
		 temp.add(new ArticleSection("finance",api.countpast6(keyword, "finance")));
		 temp.add(new ArticleSection("tech",api.countpast6(keyword, "tech")));
		 temp.add(new ArticleSection("editorial or opinions",api.countpast6(keyword,"editorial%20OR%20opinions")));
		 return temp;
	 }
	 
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/totalcountallsections/{keyword}")
	 public ArrayList<ArticleSection> fun1 (@PathVariable String keyword) throws ParseException, UnirestException
	 {
		
		 ArrayList <ArticleSection> temp = new ArrayList();
		 temp.add(new ArticleSection("business",api.countpast6(keyword, "business")));
		 temp.add(new ArticleSection("banking",api.countpast6(keyword, "banking")));
		 temp.add(new ArticleSection("finance",api.countpast6(keyword, "finance")));
		 temp.add(new ArticleSection("tech",api.countpast6(keyword, "tech")));
		 temp.add(new ArticleSection("editorial or opinions",api.countpast6(keyword,"editorial%20OR%20opinions")));
		 return temp;
	 }

	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @RequestMapping("/totalusagecount")
	 public ArrayList<ArticleSection> fun () throws ParseException, UnirestException
	 {
		
		 ArrayList <ArticleSection> temp = new ArrayList();
		 temp.add(new ArticleSection("HDFC" , api.totalusagecountpast6("hdfc")));
		 temp.add(new ArticleSection("Tesla",api.totalusagecountpast6("Tesla")));
		
		 temp.add(new ArticleSection("Aviation",api.totalusagecountpast6("Aviation")));
		 temp.add(new ArticleSection("GST",api.totalusagecountpast6("gst")));
		 return temp;
	 }

	 
}
