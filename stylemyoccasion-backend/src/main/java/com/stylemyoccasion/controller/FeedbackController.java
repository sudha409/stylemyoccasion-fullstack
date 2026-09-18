package com.stylemyoccasion.controller;

import com.stylemyoccasion.model.Feedback;
import com.stylemyoccasion.model.User;
import com.stylemyoccasion.repository.FeedbackRepository;
import com.stylemyoccasion.service.FeedbackService;
import com.stylemyoccasion.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback request) {
        Feedback save = feedbackRepository.save(request);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedback(@PathVariable Long id) {
        Feedback response = feedbackRepository.findById(id).orElse(null);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> fetchAllFeedback() {
        List<Feedback> response = feedbackRepository.findAll();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/outfit/{title}")
    public ResponseEntity<List<Feedback>> getFeedbackByOutfit(@PathVariable String title) {
        return ResponseEntity.ok(feedbackRepository.findByOutfits_Title(title));
    }

    @GetMapping("/type/{outfits_Type}")
    public ResponseEntity<List<Feedback>> getFeedbackByOutfitName(@PathVariable String outfits_Type) {
        return ResponseEntity.ok(feedbackRepository.findByType(outfits_Type));
    }

}
