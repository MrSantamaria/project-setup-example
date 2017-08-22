package com.revature.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entity.User;
import com.revature.repository.UserRepo;
import com.revature.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo ur;

	@Override
	public List<User> getAllUsers() {
		return ur.findAll();
	}

}
