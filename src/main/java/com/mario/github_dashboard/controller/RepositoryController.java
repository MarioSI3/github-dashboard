package com.mario.github_dashboard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/api/repositories")
public class RepositoryController {

    @GetMapping("/{owner}/{repoName}")
    public String getRepository(@PathVariable String owner, @PathVariable String repoName) {
        return "Repository: " + owner + "/" + repoName;
    }

}
