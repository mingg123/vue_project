package com.example.springproject.repository;


import com.example.springproject.domain.Item;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ItemRepositoryTest {

    @Autowired
    ItemRepository itemRepository;

    @Test
    void test() {
        itemRepository.save(new Item());
        System.out.println(itemRepository.findAll());
    }
}
