package io.agintelligence.services;

import io.agintelligence.domain.ProjectTask;
import io.agintelligence.repositories.BacklogRepository;
import io.agintelligence.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask() {
        return null;
    }

}
