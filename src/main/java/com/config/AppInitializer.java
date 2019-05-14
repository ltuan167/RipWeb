package com.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
	@Override
	protected Class<?>[] getRootConfigClasses() {
		System.out.println("Get Root Config classes");
		return new Class[] {  };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		System.out.println("Get getServletConfigClasses");
		return new Class[] { WebMvcConfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		System.out.println("Get getServletMappings");
		return new String[] { "/" };
	}
}
