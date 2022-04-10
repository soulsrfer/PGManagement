package com.gopalpg.pgManagement.model;

public class LoginModel {
	private String contactNumber;
	private String password;

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "LoginModel [contactNumber=" + contactNumber + ", password=" + password + "]";
	}

}
