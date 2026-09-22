package com.mario.github_dashboard.client.response;

public record GitHubUserResponse(

    String login,
    String avatarURL,
    String htmlURL
    
) {}
