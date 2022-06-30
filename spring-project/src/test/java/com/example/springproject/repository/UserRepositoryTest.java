package com.example.springproject.repository;

import com.example.springproject.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    void crud() {
        userRepository.save(new User());
        System.out.println(userRepository.findAll());
    }
}
