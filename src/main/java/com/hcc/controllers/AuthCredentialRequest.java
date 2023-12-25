package com.hcc.controllers;

import com.hcc.services.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("/")
public class AuthCredentialRequest {

    @Autowired
    UserDetailServiceImpl userDetailService;

    @GetMapping("/api/auth/login")
    boolean login(String username, String password) {
        return true;
    }

    @GetMapping("/api/auth/validate")
    boolean validate(String username, String password) {
        return true;
    }
}
