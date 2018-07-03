package com.example.demo;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;


import java.text.SimpleDateFormat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.example.demo.controller.JavaMailappl;
import com.mashape.unirest.http.exceptions.UnirestException;
@SpringBootApplication
@EnableJpaAuditing
public class MysqltestApplication {

	public static void main(String[] args) throws ParseException, UnirestException {
		SpringApplication.run(MysqltestApplication.class, args);
		
		System.out.println("helloooooooo");
		final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
	    GuardianContentApi api = new GuardianContentApi("5aa197ac-a8be-43f3-bc2a-f50a097c4c27");
	    api.setSection("business");
	    api.setFromDate(dateFormat.parse("22/07/2016"));
	    api.setToDate(dateFormat.parse("22/07/2017"));
	    Response response = api.getContent("bitcoin");
	    Arrays.stream(response.getResults()).forEach(System.out::println);
	    //JavaMailappl.sendMail("varshak333@gmail.com");
	}
}
