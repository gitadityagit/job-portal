package com.example.BasicApp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    Long jobId;
    String position;

    //Constructors
    Job(){

    }
    public Job(Long jobId, String position) {
        this.jobId = jobId;
        this.position = position;
    }

    //Getters and Setters
    public Long getId() {
		return id;
	}
    
    public Long getJobId() {
        return jobId;
    }
    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }
    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
}
