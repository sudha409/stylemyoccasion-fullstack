package com.stylemyoccasion.repository;

import com.stylemyoccasion.model.Occasion;
import com.stylemyoccasion.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OccasionRepository extends JpaRepository<Occasion, Long> {
}
