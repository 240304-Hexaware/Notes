package com.revature.fetchdemoserver.dtos;

public class Answer {
    private Integer answer;
    private String fullAnswer;

    public Answer(Integer answer, String fullAnswer) {
        this.answer = answer;
        this.fullAnswer = fullAnswer;
    }

    public Answer() {
    }

    public Integer getAnswer() {
        return answer;
    }

    public void setAnswer(Integer answer) {
        this.answer = answer;
    }

    public String getFullAnswer() {
        return fullAnswer;
    }

    public void setFullAnswer(String fullAnswer) {
        this.fullAnswer = fullAnswer;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "answer=" + answer +
                ", fullAnswer='" + fullAnswer + '\'' +
                '}';
    }
}

