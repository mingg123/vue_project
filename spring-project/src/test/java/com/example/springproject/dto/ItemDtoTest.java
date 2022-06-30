package com.example.springproject.dto;

import org.junit.jupiter.api.Test;

public class ItemDtoTest {

    @Test
    void test() {
        ItemDto itemDto = new ItemDto();
        itemDto.setId("1");

        System.out.print(itemDto.getId());
    }
}
