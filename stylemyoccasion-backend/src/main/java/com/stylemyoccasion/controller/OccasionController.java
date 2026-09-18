package com.stylemyoccasion.controller;

import com.stylemyoccasion.model.Occasion;
import com.stylemyoccasion.service.OccasionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/occasion")
public class OccasionController {
    @Autowired
    private OccasionService occasionService;

    // CREATE
    @PostMapping("/{id}")
    public ResponseEntity<Occasion> create(@RequestBody Occasion occasion) {
        return ResponseEntity.ok(occasionService.createOccasion(occasion));
    }


    @PostMapping
    public ResponseEntity<List<Occasion>> createAll(@RequestBody List<Occasion> occasions) {
        return ResponseEntity.ok(occasionService.createOccasions(occasions));
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<Occasion>> getAll() {
        return ResponseEntity.ok(occasionService.getAllOccasions());
    }

    // READ BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Occasion> getById(@PathVariable Long id) {
        return ResponseEntity.ok(occasionService.getOccasionById(id));
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Occasion> update(
            @PathVariable Long id,
            @RequestBody Occasion occasion) {
        return ResponseEntity.ok(occasionService.updateOccasion(id, occasion));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        occasionService.deleteOccasion(id);
        return ResponseEntity.ok("Occasion deleted successfully");
    }
}
