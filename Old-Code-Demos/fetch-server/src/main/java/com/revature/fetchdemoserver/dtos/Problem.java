package com.revature.fetchdemoserver.dtos;

import java.util.List;

public class Problem {
    private List<Integer> integers;

    public Problem(List<Integer> integers) {
        this.integers = integers;
    }

    public Problem() {
    }

    public List<Integer> getIntegers() {
        return integers;
    }

    public void setIntegers(List<Integer> integers) {
        this.integers = integers;
    }

    @Override
    public String toString() {
        return "Problem{" +
                "integers=" + integers +
                '}';
    }
}
