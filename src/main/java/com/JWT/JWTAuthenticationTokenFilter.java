package com.JWT;

import com.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JWTAuthenticationTokenFilter extends UsernamePasswordAuthenticationFilter {

    public final static String JWT_COOKIE_NAME = "jwt";

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDAO userDAO;

    @Override
    public void doFilter (ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        Cookie[] cookies = httpRequest.getCookies();
        for (Cookie cookie: cookies) {
            if (cookie.getName().equals(JWT_COOKIE_NAME)) {
                String authToken = cookie.getValue();
                if (jwtService.validateTokenLogin(authToken)) {
                    String username = jwtService.getUsernameFromToken(authToken);
                    com.entities.User user = userDAO.getUserByEmail(username);
                    if (user != null) {
                        boolean enabled = true;
                        boolean accountNonExpired = true;
                        boolean credentialsNonExpired = true;
                        boolean accountNonLocked = true;
                        UserDetails userDetail = new User(username, user.getPassword(), enabled, accountNonExpired,
                                                            credentialsNonExpired, accountNonLocked, user.getAuthorities());

                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail,
                                null, userDetail.getAuthorities());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            }
        }

    }
}
