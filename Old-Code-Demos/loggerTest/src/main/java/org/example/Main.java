package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Main {
    //"MainLogger"
    private static final Logger logger = LogManager.getLogger(Log4j2DemoApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(Main.class);


    }
}