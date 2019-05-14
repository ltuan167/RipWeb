package com.test;

import org.junit.Test;

import static org.junit.Assert.*;

public class ControllerTester {

	@Test
	public void shouldReturnCorrectMapping() {
		assertEquals(new com.controller.HomepageController().homepage(), "homepage");
//		assertEquals(new com.controller.LoginController().login(), "login");
		assertEquals(new com.controller.SignupController().getSignup(), "signup");
	}

}