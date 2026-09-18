package com.stylemyoccasion.service;

import com.stylemyoccasion.model.User;
import com.stylemyoccasion.repository.UserRepository;
import com.stylemyoccasion.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User signup(User request) {
        if (request.getPassword() != null) {
            request.setPassword(passwordEncoder.encode(request.getPassword()));
        }
        return userRepository.save(request);
    }

    public Map<String, Object> login(User request) {
        User user = userRepository.findByEmail(request.getEmail());
        if (user == null) {
            return null;
        }

        if (request.getPassword() != null && passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user);
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("user", user);
            return response;
        }
        return null;
    }

    public List<User> signupDetails() {
        return userRepository.findAll();
    }
}
