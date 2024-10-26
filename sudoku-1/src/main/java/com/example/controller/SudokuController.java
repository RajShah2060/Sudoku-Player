package com.example.controller;

import com.example.service.BoardGenerator;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Controller
public class SudokuController {

    private BoardGenerator boardGenerator;
    private int K = 20;


    @GetMapping("/")
    public String getBoard(Model model){
        model.addAttribute("username", "hab");
        this.boardGenerator = new BoardGenerator(9, K);
        int[][] board = boardGenerator.getBoard();
        int[][] solution = boardGenerator.getSolution();
        model.addAttribute("game_level", "easy");
        model.addAttribute("board", board);
        model.addAttribute("solution", solution);
        model.addAttribute("empty_tiles", K);
        return "sudoku";
    }

    @GetMapping("/level/{level}")
    public String getLevel(@PathVariable("level") String level, Model model){
        if(level.equals("easy")){
            K= 20;
        } else if(level.equals("medium")){
            K= 30;
        } else if(level.equals("hard")){
            K = 40;
        }
        this.boardGenerator = new BoardGenerator(9, K);
        int[][] board = boardGenerator.getBoard();
        int[][] solution = boardGenerator.getSolution();
        model.addAttribute("game_level", level);
        model.addAttribute("board", board);
        model.addAttribute("solution", solution);
        model.addAttribute("empty_tiles", K);

        return "sudoku";
    }

}
