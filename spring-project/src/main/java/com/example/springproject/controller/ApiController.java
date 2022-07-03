package com.example.springproject.controller;

import com.example.springproject.domain.Item;
import com.example.springproject.dto.ItemDto;
import com.example.springproject.repository.ItemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
@RestController
@RequestMapping("/eve-project")
@CrossOrigin(origins = "*")
public class ApiController {

  @Autowired
  ItemRepository itemRepository;

  @GetMapping("/allItem")
  public List<Item> getAll() {
    return itemRepository.findAll();
  }

  @PostMapping("/addItem")
  public List<Item> addItem(@RequestBody Item item) {
    itemRepository.save(item);
    log.info("addItem : {}", item);
    return itemRepository.findAll();
  }

  @DeleteMapping("/{id}")
  public List<Item> deleteItem(@PathVariable String id) {
    log.info("delete id : {}", id);
    itemRepository.deleteById(id);
    return itemRepository.findAll();
  }


}
