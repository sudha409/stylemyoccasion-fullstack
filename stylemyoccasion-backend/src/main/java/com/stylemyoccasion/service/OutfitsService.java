package com.stylemyoccasion.service;

import com.stylemyoccasion.model.Outfits;
import com.stylemyoccasion.repository.OutfitsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OutfitsService {
    @Autowired
    private OutfitsRepository outfitsRepository;


    public ResponseEntity<List<Outfits>> createOutfits(List<Outfits> request) {
        List<Outfits> savedOutfits = outfitsRepository.saveAll(request);
        return ResponseEntity.ok(savedOutfits);
    }


    public ResponseEntity<Outfits> createOutfit(Outfits request) {
        Outfits savedOutfit = outfitsRepository.save(request);
        return ResponseEntity.ok(savedOutfit);
    }


    public List<Outfits> getByOccasionId(Long occasionId) {
        return outfitsRepository.findByOccasion_Id(occasionId);
    }
}