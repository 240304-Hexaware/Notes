package com.example.testServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.testServer.controllers"})
public class TestServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestServerApplication.class, args);
	}

}
