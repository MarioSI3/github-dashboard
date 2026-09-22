package com.mario.github_dashboard.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mario.github_dashboard.client.response.GitHubRepositoryResponse;
import com.mario.github_dashboard.dto.RepositoryDTO;

@Service 
public class RepositoryService {

    public String getRepositories(String username){
        return "Searching for repositories of " + username;
    }

    //Map the information given by github API to our DTO

    private RepositoryDTO toRepositoryDTO(GitHubRepositoryResponse repository) {
        return new RepositoryDTO(
            repository.name(),
            repository.description(),
            repository.language(),
            repository.url(),
            repository.stars(),
            repository.forks()
        );

    }

    //When there are more than 1 it adds them to a list
    private List<RepositoryDTO> toRepositoryDTOs(List<GitHubRepositoryResponse> repositories) {

        return repositories.stream()
                .map(repository -> toRepositoryDTO(repository))
                .toList();
    }
}
