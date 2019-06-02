package com.config;

import com.JWT.JWTAuthenticationTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
		securedEnabled = true,
		jsr250Enabled = true,
		prePostEnabled = true
)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
				.passwordEncoder(passwordEncoder);
		System.out.println("[SECURITY] Authentication Manager Builder: " + auth);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic();
		http.addFilterBefore(new JWTAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//		http.authorizeRequests()
//				.anyRequest().authenticated()
//					.and()
//				.formLogin()
//					.and()
//				.httpBasic();
//		http.authorizeRequests()
//				.antMatchers("/login")
//					.permitAll()
//				.antMatchers("/**")
//					.hasAnyRole("ROLE_USER", "ROLE_GUEST")
//				.and()
//					.formLogin()
//					.loginPage("/login")
//					.defaultSuccessUrl("/home")
//					.failureUrl("/login?error=true")
//					.permitAll()
//				.and()
//					.logout()
//					.logoutSuccessUrl("/login?logout=true")
//					.invalidateHttpSession(true)
//					.permitAll()
//				.and()
//					.csrf()
//					.disable();
		System.out.println("[SECURITY] HttpSecurity: " + http);
		System.out.println("[SECURITY][TEST][BCRYPT] " + passwordEncoder().encode("RIPWEB!"));
	}
}
