package com.example.testServer.controllers;

import com.example.testServer.Obj;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    List<Obj> objectList = new ArrayList<>();

    @PostMapping("/new")
    @CrossOrigin
    public Obj postNew(@RequestBody Obj obj) {
        objectList.add(obj);
        System.out.println("new object posted");
        return obj;
    }

    @GetMapping("/get")
    @CrossOrigin
    public List<Obj> getObjects() {
        System.out.println("objects requested");
        return this.objectList;
    }

}
