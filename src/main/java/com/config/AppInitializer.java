package com.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		System.out.println("[INITIALIZER] Get Root Config Classes");
		return new Class[] { WebMvcConfig.class };
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		System.out.println("[INITIALIZER] Get Servlet Config Classes");
		return new Class[] { WebMvcConfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		System.out.println("[INITIALIZER] Get Servlet Mappings");
		return new String[] { "/" };
	}
}
