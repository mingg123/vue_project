package com.example.springproject.controller;

import com.example.springproject.dto.ItemDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/eve-project")
@CrossOrigin(origins = "http://localhost:8080/")
public class ApiController {

  @GetMapping("/all")
  public String getAll() {
    System.out.println("all call");
    return "all";
  }

  @PostMapping("/addItem")
  public List<ItemDto> addItem(@RequestBody ItemDto itemDto) {
    log.info("추가 : {}", itemDto);
    System.out.println(itemDto);
    List<ItemDto> items = new ArrayList<>();
    items.add(itemDto);
    return items;
  }

  @DeleteMapping("/{index}")
  public List<ItemDto> deleteItem(@PathVariable int index) {
    log.info("delete index : {}", index);
    List<ItemDto> items = new ArrayList<>();
    return items;
  }


}
