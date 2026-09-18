package com.stylemyoccasion.repository;

import com.stylemyoccasion.model.Outfits;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OutfitsRepository extends JpaRepository<Outfits, String> {

    List<Outfits> findByOccasion_Id(Long occasionId);

}
