package com.hcc.controllers;

import com.hcc.entities.Assignment;
import com.hcc.entities.User;
import com.hcc.exceptions.ResourceNotFoundException;
import com.hcc.repositories.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping("/")
public class AssignmentResponseDto {
    @Autowired
    private AssignmentRepository assignmentRepo;

    //    Get Assignments By User /api/assignments
    @GetMapping("/api/assignments")
    List<Assignment> getAssignmentsByUser(User user) {
        List<Assignment> allAssignments = assignmentRepo.findAll();
        List<Assignment> userAssignments = new ArrayList<>();

        for (Assignment a : allAssignments) {
            if (a.getUser() == user) {
                userAssignments.add(a);
            }
        }
        return userAssignments;
    }

//    Get Assignment By Id /api/assignments/{id}
    @GetMapping("/api/assignments/{id}")
    Assignment getAssignmentById(@PathVariable Long id) {
        Assignment assignment = assignmentRepo.getReferenceById(id);
        if (assignment != null) {
            return assignment;
        } else {
            throw new ResourceNotFoundException("Assignment with " + id + " not found");
        }
    }

//    Put Assignment by Id /api/assignments/{id}
    @PutMapping("/api/assignments/{id}")
    Assignment updateAssignmentById(@RequestBody Assignment newAssignment, @PathVariable Long id) {
        return assignmentRepo.findById(id)
                .map(assignment -> {
                    assignment.setId(newAssignment.getId());
                    return assignmentRepo.save(assignment);
                })
                .orElseGet(() -> {
                    newAssignment.setId(id);
                    return assignmentRepo.save(newAssignment);
                });
    }

//    Post Assignment /api/assignments
    @PostMapping("/api/assignments")
    Assignment createAssignment(@RequestBody Assignment newAssignment) {
        return assignmentRepo.save(newAssignment);
    }
}
