package com.mario.github_dashboard.client.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GitHubRepositoryResponse(

    String name,
    String description,
    String language,
    @JsonProperty("stargazers_count")
    int stars,
    @JsonProperty("forks_count")
    int forks,
    @JsonProperty("html_url")
    String url

) {}
