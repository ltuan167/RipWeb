package com.JWT;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JWTAuthenticationTokenFilter extends UsernamePasswordAuthenticationFilter {

//    private final static String JWT_COOKIE_NAME = "jwt";
//
//    @Autowired
//    private JwtService jwtService;
//
//    @Autowired
//    private UserServices userServices;
//
//    @Override
//    public void doFilter (ServletRequest request, ServletResponse response, FilterChain chain)
//            throws IOException, ServletException{
//        HttpServletRequest httpRequest = (HttpServletRequest) request;
//        Cookie[] cookies = httpRequest.getCookies();
//        for (Cookie cookie: cookies) {
//            if (cookie.getName().equals(JWT_COOKIE_NAME)) {
//                String authToken = cookie.getValue();
//
//                if (jwtService.validateTokenLogin(authToken)) {
//                    String username = jwtService.getUsernameFromToken(authToken);
//                    com.entities.User user = userServices.loadUserByEmail(username).get(1);
//                    if (user != null) {
//                        boolean enabled = true;
//                        boolean accountNonExpired = true;
//                        boolean credentialsNonExpired = true;
//                        boolean accountNonLocked = true;
//                        UserDetails userDetail = new User(username, user.getPassword(), enabled, accountNonExpired,
//                                                            credentialsNonExpired, accountNonLocked, user.getAuthorities());
//
//                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail,
//                                null, userDetail.getAuthorities());
//                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
//                        SecurityContextHolder.getContext().setAuthentication(authentication);
//                    }
//                }
//            }
//        }
//
//    }
}
