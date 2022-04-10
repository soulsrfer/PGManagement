package com.gopalpg.pgManagement.service;

import java.util.List;

import com.gopalpg.pgManagement.entity.UserEntity;
import com.gopalpg.pgManagement.model.LoginModel;

public interface UserService {

	UserEntity saveUser(UserEntity user);
	List<UserEntity> getAllUsers();
	UserEntity getUserById(Long id);
	UserEntity updateUser(UserEntity user, Long id);
	void deleteUser(long id);
	UserEntity login(LoginModel loginModel);
}
