package com.stylemyoccasion.repository;

import com.stylemyoccasion.model.Feedback;
import com.stylemyoccasion.model.Occasion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByOutfits_Title(String title);
    List<Feedback> findByType(String type);
}
