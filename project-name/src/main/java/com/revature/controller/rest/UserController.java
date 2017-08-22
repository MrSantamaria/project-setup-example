package com.revature.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.User;
import com.revature.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService us;

	@GetMapping
	public List<User> getAllUsers() {
		return us.getAllUsers();
	}
}
