package com.example.BasicApp.controllers;

import com.example.BasicApp.models.Job;
import com.example.BasicApp.repo.JobRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class JobController {

    @Autowired
    JobRepo jobRepo;

    @RequestMapping("/job")
    public String job(){
        return "job home page";
    }

    @GetMapping("/jobs")
    public List<Job> getAllJobs(){
        return jobRepo.findAll();
    }

    @PostMapping("/addJob")
    public void addJob(@RequestBody Job userJob){
        System.out.println(userJob.getPosition());
        jobRepo.save(userJob);
    }
}
