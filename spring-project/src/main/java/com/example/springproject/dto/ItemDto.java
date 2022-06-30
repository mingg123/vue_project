package com.example.springproject.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDto {
    @JsonProperty("id")
    private String id;
    @JsonProperty("code")
    private String code;
    private String type;
    private String name;
    private int amount;
    private String imageUrl;
}
