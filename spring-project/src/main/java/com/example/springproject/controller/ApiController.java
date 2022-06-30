package com.example.springproject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/eve-project")
public class ApiController {

  @GetMapping("/all")
  public String getAll() {
    System.out.println("all call");
    return "all";
  }
  
}
