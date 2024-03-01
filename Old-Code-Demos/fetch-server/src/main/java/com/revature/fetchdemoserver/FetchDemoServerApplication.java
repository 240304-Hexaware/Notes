package com.revature.fetchdemoserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.revature.fetchdemoserver.controllers")
public class FetchDemoServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(FetchDemoServerApplication.class, args);
	}

}
