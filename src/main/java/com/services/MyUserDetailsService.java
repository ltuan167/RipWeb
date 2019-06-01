//package com.services;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Component
//public class MyUserDetailsService implements UserDetailsService {
////    @Override
////    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
////        return null;
////    }
//
////    @Autowired
////    private UserDAO userDAO;
//
////    @Override
////    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
////        User user  = userDAO.loadUserbyEmail(email);
////        if (user == null )
////            return null;
////
////        boolean enabled = true;
////        boolean accountNonExpired = true;
////        boolean credentialsNonExpired = true;
////        boolean accountNonLocked = true;
////
////        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
////        authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
////
////        return new org.springframework.security.core.userdetails.User(email, user.getPassword(), enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
////    }
//}
