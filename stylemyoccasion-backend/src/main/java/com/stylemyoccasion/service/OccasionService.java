package com.stylemyoccasion.service;

import com.stylemyoccasion.model.Occasion;
import com.stylemyoccasion.model.User;
import com.stylemyoccasion.repository.OccasionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OccasionService {
    @Autowired
    private OccasionRepository occasionRepository;

    // CREATE
    public Occasion createOccasion(Occasion occasion) {
        return occasionRepository.save(occasion);
    }

    // READ ALL
    public List<Occasion> getAllOccasions() {
        return occasionRepository.findAll();
    }

    // READ BY ID
    public Occasion getOccasionById(Long id) {
        return occasionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Occasion not found"));
    }

    // UPDATE
    public Occasion updateOccasion(Long id, Occasion updatedOccasion) {
        Occasion existing = getOccasionById(id);
        existing.setName(updatedOccasion.getName());
        existing.setLink(updatedOccasion.getLink());

        return occasionRepository.save(existing);
    }

    // DELETE
    public void deleteOccasion(Long id) {
        occasionRepository.deleteById(id);
    }

    public List<Occasion> createOccasions(List<Occasion> occasions) {

        return occasionRepository.saveAll(occasions);
    }
}


