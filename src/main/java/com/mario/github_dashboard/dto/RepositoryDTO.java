package com.mario.github_dashboard.dto;

//What we want to know about each repository
public record RepositoryDTO(    
    
    String name,
    String description,
    String language,
    String url,
    int stars,
    int forks

){}
