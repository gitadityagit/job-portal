package com.example.BasicApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.BasicApp.models.User;
import com.example.BasicApp.repo.UserRepo;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class AppController {

	@Autowired
	UserRepo userRepo;

	@RequestMapping("/user")
	public String home() {
		return "Hello Home Page";
	}
		
	@GetMapping("/users")
	public List<User> getAll() {
		return userRepo.findAll();
	}

	@ResponseStatus(value=HttpStatus.CREATED)
	@PostMapping("/register")
	public void register(@RequestBody User user) {
		String email = user.getEmail();

		List<User> list=userRepo.findAll();
		for(User crntUser:list){
			if(crntUser.getEmail().equals(email)){
				System.out.println("user already exist");
				return;
			}
		}

		System.out.println("user successfully registered");
		userRepo.save(user);
		return;
	}

	@PostMapping("/login")
	public User login(@RequestBody User user) {
		
		String email = user.getEmail();
		String password = user.getPassword();
		
		List<User> users=userRepo.findAll();
		
		for(User crntUser:users) {
			if(email.equals(crntUser.getEmail()) && password.equals(crntUser.getPassword())) {
				System.out.println("user logged in successfully");
				return crntUser;
			}
		}
		
		System.out.println("user does not exist. Please register first then login");
		return new User("","","","");
	}
	
	@ResponseStatus(value=HttpStatus.NO_CONTENT)
	@DeleteMapping("/removeUser/{id}")
	public void removeUser(@PathVariable long  id) {
		
		User existUser=userRepo.findById(id).orElse(null);
		
		if(existUser!=null) {
			userRepo.deleteById(id);
			System.out.println("user removed successfully");
			return ;
		}
		
		System.out.println("user does not exist to remove");
	}

	@DeleteMapping("/removeAllUsers")
	public void removeAllUsers(){
		userRepo.deleteAll();
	}

}
