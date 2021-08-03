package com.example.BasicApp.repo;

import com.example.BasicApp.models.Job;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends JpaRepository<Job,Long>{
    
}
