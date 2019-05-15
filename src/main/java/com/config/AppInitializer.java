package com.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		System.out.println("[INITIALIZER] Get Root Config classes");
		return new Class[] {  };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		System.out.println("[INITIALIZER] Get getServletConfigClasses");
		return new Class[] { WebMvcConfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		System.out.println("[INITIALIZER] Get getServletMappings");
		return new String[] { "/" };
	}
}
