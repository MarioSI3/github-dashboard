package com.mario.github_dashboard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mario.github_dashboard.dto.UserRepositoriesDTO;
import com.mario.github_dashboard.service.RepositoryService;

@RestController 
@RequestMapping("/api/users")
public class RepositoryController {

    private final RepositoryService repositoryService;

    public RepositoryController(RepositoryService repositoryService){
        this.repositoryService = repositoryService;
    }

    @GetMapping("/{owner}/repositories")
    public UserRepositoriesDTO getRepositories(@PathVariable String owner) {

        return repositoryService.getRepositories(owner);
    }

}
