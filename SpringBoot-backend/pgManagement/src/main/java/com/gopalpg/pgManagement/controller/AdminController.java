package com.gopalpg.pgManagement.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gopalpg.pgManagement.entity.AdminEntity;
import com.gopalpg.pgManagement.service.AdminService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class AdminController {

	private AdminService adminService;

	public AdminController(AdminService adminService) {
		super();
		this.adminService = adminService;
	}
	
	// build create admin REST API
	
	@PostMapping("/createAdmin")
	public ResponseEntity<AdminEntity> saveAdmin(@RequestBody AdminEntity admin){
		return new ResponseEntity<AdminEntity>(adminService.saveAdmin(admin), HttpStatus.CREATED);
	}
}
