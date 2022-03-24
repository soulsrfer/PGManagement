package com.gopalpg.pgManagement.service.impl;

import org.springframework.stereotype.Service;

import com.gopalpg.pgManagement.dao.AdminRepository;
import com.gopalpg.pgManagement.entity.AdminEntity;
import com.gopalpg.pgManagement.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	private AdminRepository adminRepository;

	public AdminServiceImpl(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	@Override
	public AdminEntity saveAdmin(AdminEntity admin) {

		return adminRepository.save(admin);
	}
	
	
	
}
