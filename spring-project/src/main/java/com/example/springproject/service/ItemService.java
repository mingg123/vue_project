package com.example.springproject.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.springproject.domain.Item;
import com.example.springproject.dto.ItemDto;
import com.example.springproject.repository.ItemRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ItemService {
  
  @Autowired ItemRepository itemRepository;

  private final ModelMapper modelMapper;

  public List<ItemDto> getAllItems() {
    List<Item> items = itemRepository.findAll();
    return items.stream().map(item -> modelMapper.map(item, ItemDto.class)).collect(Collectors.toList());
  }

  public List<ItemDto> addItem(Item item) {
    itemRepository.save(item);
    return getAllItems();
  }

  public List<ItemDto> deleteItem(String id) {
    itemRepository.deleteById(id);
    return getAllItems();
  }

}
