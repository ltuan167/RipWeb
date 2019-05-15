package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "com" })
public class WebMvcConfig implements WebMvcConfigurer {

	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver vr = new InternalResourceViewResolver();
		// set location of views
		vr.setPrefix("/WEB-INF/jsp/");
		// set the extension of views
		vr.setSuffix(".jsp");
		System.out.println("[MVC] InternalResourceViewResolver: " + vr);
		return vr;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry
				.addResourceHandler("/resources/**")
				.addResourceLocations("/WEB-INF/resources/");
		System.out.println("[MVC] ResourceHandlerRegistry: " + registry);
	}

}
