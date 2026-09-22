package com.mario.github_dashboard.service;
import org.springframework.stereotype.Service;

@Service 
public class RepositoryService {

    public String getRepositories(String username){
        return "Searching for repositories of " + username;
    }
}
