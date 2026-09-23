package com.mario.github_dashboard.client;

import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import com.mario.github_dashboard.client.response.GitHubRepositoryResponse; 

@Component 
public class GitHubClient {

    private final RestClient restClient;    //The one that is going to use the github API

    public GitHubClient(){
        this.restClient = RestClient.builder()
                .baseUrl("https://api.github.com")
                .build();
    }

    public List<GitHubRepositoryResponse> getRepositories(String username) {
        return restClient
                .get()
                .uri("/users/{username}/repos", username)
                .retrieve()
                .body(new ParameterizedTypeReference<List<GitHubRepositoryResponse>>() {});
    }

}
