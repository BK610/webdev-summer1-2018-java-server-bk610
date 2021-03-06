package com.example.assignment1.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.assignment1.models.User;
import com.example.assignment1.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user, HttpSession session) {
		
		User cu = userRepository.save(user);
		
		session.setAttribute("currentUser", cu);
		
		return cu;
	}
	
	@GetMapping("/profile")
	public Optional<User> profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		return userRepository.findById(currentUser.getId());
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user, HttpSession session) {
		Optional<User> maybeUser = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		if (maybeUser.isPresent()) {
			user = maybeUser.get();
			session.setAttribute("currentUser", user);
		} else {
			user.setUsername(null);
		}
		return user;
	}

	
	@PutMapping("/api/user/{userId}")
	public User updateUser(
			@PathVariable("userId") int id,
			@RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(id);
		if(optional.isPresent()) {
			User user = optional.get();
			if (newUser.getUsername() != null && newUser.getUsername() != "") {
				user.setUsername(newUser.getUsername());
			}
			if (newUser.getPassword() != null && newUser.getPassword() != "") {
				user.setPassword(newUser.getPassword());
			}
			if (newUser.getFirstName() != null && newUser.getFirstName() != "") {
				user.setFirstName(newUser.getFirstName());
			}
			if (newUser.getLastName() != null && newUser.getLastName() != "") {
				user.setLastName(newUser.getLastName());				
			}
			if (newUser.getEmail() != null && newUser.getEmail() != "") {
				user.setEmail(newUser.getEmail());
			}
			return userRepository.save(user);
		}
		return null;
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserByUserId(@PathVariable("userId") String userId) {
		int id = Integer.parseInt(userId);
		return userRepository.findById(id);
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
	
}