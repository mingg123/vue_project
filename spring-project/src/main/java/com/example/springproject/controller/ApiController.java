package com.example.springproject.controller;

import com.example.springproject.domain.Item;
import com.example.springproject.dto.ItemDto;
import com.example.springproject.repository.ItemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;


@Slf4j
@RestController
@RequestMapping("/eve-project")
@CrossOrigin(origins = "http://localhost:8080/")
public class ApiController {

  @Autowired
  ItemRepository itemRepository;

  @GetMapping("/allItem")
  public List<Item> getAll() {
    return itemRepository.findAll();
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
