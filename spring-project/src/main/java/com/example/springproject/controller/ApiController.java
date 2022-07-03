package com.example.springproject.controller;

import com.example.springproject.domain.Item;
import com.example.springproject.dto.ItemDto;
import com.example.springproject.repository.ItemRepository;
import com.example.springproject.service.ItemService;

import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class ApiController {

  private final ItemService itemService;

  @GetMapping("/allItem")
  public List<ItemDto> getAllItems() {
    return itemService.getAllItems();
  }

  @PostMapping("/addItem")
  public List<ItemDto> addItem(@RequestBody Item item) {
    return itemService.addItem(item);
  }

  @DeleteMapping("/{id}")
  public List<ItemDto> deleteItem(@PathVariable String id) {
    log.info("delete id : {}", id);
    return itemService.deleteItem(id);
  }


}
