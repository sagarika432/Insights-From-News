package com.example.demo.controller;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class JavaMailappl {

	
	
	public static void sendMail (String s)
	{
		
	    
        final String username = "varshak333@gmail.com"; // enter your mail id
       final String password = "starmoon@123";// enter ur password

       Properties props = new Properties();
       props.put("mail.smtp.auth", "true");
       props.put("mail.smtp.starttls.enable", "true");
       props.put("mail.smtp.host", "smtp.gmail.com");
       props.put("mail.smtp.port", "587");
              

props.put("mail.smtp.ssl.trust", "smtp.gmail.com");


       Session session = Session.getInstance(props,
         new javax.mail.Authenticator() {
           protected PasswordAuthentication getPasswordAuthentication() {
               return new PasswordAuthentication(username, password);
           }
         });

       try {

           Message message = new MimeMessage(session);
           message.setFrom(new InternetAddress("varshak333@gmail.com")); // same email id
           message.setRecipients(Message.RecipientType.TO,
               InternetAddress.parse(s));// whome u have to send mails that person id
           message.setSubject("Registered on News Insights ");
           message.setText("Dear User,"
               + "\n\n You are registered with news insights");

           Transport.send(message);

           System.out.println("Done");

       } catch (MessagingException e) {
           throw new RuntimeException(e);
       }
		
	}
}
