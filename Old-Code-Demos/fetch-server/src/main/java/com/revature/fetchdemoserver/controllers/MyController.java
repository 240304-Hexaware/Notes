package com.revature.fetchdemoserver.controllers;

import com.revature.fetchdemoserver.dtos.Answer;
import com.revature.fetchdemoserver.dtos.Problem;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
public class MyController {


    @PostMapping("/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody Answer add(@RequestBody Problem problem) {
        System.out.println("Add method!");
        System.out.println(problem);
        Integer sum = 0;
        String response = "";
        for(Integer i : problem.getIntegers()) {
            response += i + "+";
            sum += i;
        }
        response += "=" + sum;
        Answer answer = new Answer(sum, response);
        System.out.println(answer);
        return answer;
    }
}
