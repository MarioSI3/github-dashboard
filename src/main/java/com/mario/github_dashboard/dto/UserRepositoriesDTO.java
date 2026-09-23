package com.mario.github_dashboard.dto;

import java.util.List;

public record UserRepositoriesDTO(

    String username,     //Username of the creator
    //String avatarURL,   //Avatar
    //String htmlURL,     //Profile Link
    List<RepositoryDTO> repositories    //List with the info of eache repository

) {}
