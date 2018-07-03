package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	User loggedinuser;
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	@GetMapping("/users")
	public List<User> getAllNotes() {
	    return userRepository.findAll();
	}
	
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	@PostMapping("/useradd")
	public User createUser(@Valid @RequestBody User user) {
		 JavaMailappl.sendMail(user.getEmailid());
	    return userRepository.save(user);
	}
	 
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @PostMapping("/checklogin")
	 public Small check(@RequestBody LoginUser loginUser) {
		 boolean valid =false;
		 User temp1 = null;
		 Small s= new Small();
		 s.username = loginUser.getUsername();
		  List <User> temp = userRepository.findUserByusername(loginUser.getUsername());
		  System.out.println(temp.isEmpty() +" " + temp.size());
		 if(!temp.isEmpty())
		 {
			 temp1 = (User)temp.get(0);
			 System.out.println(temp1.getPassword());
			 if( loginUser.getPassword().equals(temp1.getPassword()))
			 {
				 System.out.println(loginUser.getPassword() + " " + temp1.getPassword());
				 s.setValue(true);
				 
			 }
		 }
		 
		 
		   
		 return s;
		}
	 @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	 @GetMapping("/finduser/{username}")
	 public User find (@PathVariable String username )
	 {
		 List <User> temp = userRepository.findUserByusername(username);
		  return (User)temp.get(0);
	 }

}
