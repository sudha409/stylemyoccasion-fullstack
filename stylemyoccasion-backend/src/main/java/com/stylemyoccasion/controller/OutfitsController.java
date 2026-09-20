package com.stylemyoccasion.controller;

import com.stylemyoccasion.model.Outfits;
import com.stylemyoccasion.service.OutfitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/outfits")
public class OutfitsController {
    @Autowired
    private OutfitsService userService;

    @PostMapping("/{id}")
    public ResponseEntity<Outfits> createOutfit(@PathVariable String id, @RequestBody Outfits request) {
        return userService.createOutfit(request);
    }

    @PostMapping
    public ResponseEntity<List<Outfits>> createOutfits(@RequestBody List<Outfits> request) {
        return userService.createOutfits(request);
    }


    @GetMapping("/occasion/{occasionId}")
    public ResponseEntity<List<Outfits>> getByOccasionId(@PathVariable Long occasionId) {
        return ResponseEntity.ok(userService.getByOccasionId(occasionId));
    }

}
