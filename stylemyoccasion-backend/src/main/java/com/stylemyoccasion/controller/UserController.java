package com.stylemyoccasion.controller;

import com.stylemyoccasion.model.User;
import com.stylemyoccasion.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User request) {
        User response = userService.signup(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<User>> signupDetails() {
        List<User> response = userService.signupDetails();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User request) {
        Map<String, Object> response = userService.login(request);
        if (response == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }
        return ResponseEntity.ok(response);
    }


    @PutMapping("/password-reset")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        boolean ok = userService.resetPassword(email, password);
        if (!ok) {
            return ResponseEntity.status(400).body(Map.of("message", "Invalid or expired token"));
        }
        return ResponseEntity.ok(Map.of("message", "Password reset successful"));
    }
}
