package com.example.service;


import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BoardGenerator {
    private int[][] board;  // the board
    private int N; // number of columns/rows
    private int SRN; // square root of N
    private int K; // number of missing digits
    Random random = new Random();

    public BoardGenerator() {
    }

    public BoardGenerator(int N, int K){
        this.N = N;
        this.K = K;

        Double sqrt = Math.sqrt(N);
        SRN = sqrt.intValue(); // Double ---> int
        board = new int[N][N];
        fillValues();
    }

    public int[][] getSolution(){
       return board;
    }

    public int[][] getBoard(){
       int [][] theBoard = new int[N][N];
       for(int i=0; i<N; i++){
           for(int j=0; j<N; j++){
               theBoard[i][j] = board[i][j];
           }
       }
       return removeElements(theBoard);
    }

    private void fillValues(){
        // Fill diagonal of SRN * SRN matrices
        fillDiagonal();
        //Fill the remaining blocks
        solveBoard();
    }

    // Fill the diagonal SRN x SRN matrices
    void fillDiagonal(){
        for(int i=0; i<N; i=i+SRN)
            fillBox(i,i);   // start coordinate (0,0), (SRN,SRN)
    }

    // Fill a 3 X 3 matrix
    void fillBox(int row, int col){
        List<Integer> attempts = new ArrayList<>(List.of(1,2,3,4,5,6,7,8,9));
        Collections.shuffle(attempts);
        for(int i=0; i<SRN; i++){
            for(int j=0;j<SRN; j++){
                board[row+i][col+j] = attempts.removeLast();
            }
        }
    }

    //isNumber in row
    boolean isNumberInRow(int num, int row){
        for(int i =0; i<N; i++){
            if (board[row][i] == num){
                return true;
            }
        }
        return false;
    }
    //isNumber in column
    boolean isNumberInColumn(int num, int col){
        for (int i=0; i<N; i++){
            if(board[i][col] == num)
                return true;
        }
        return false;
    }

    boolean isNumberInBox (int number, int row, int col){
        int localRow = row - row % SRN;
        int localCol = col - col % SRN;

        for(int i=localRow; i < localRow + SRN; i++){
            for(int j=localCol; j < localCol + SRN; j++){
                if(board[i][j] == number)
                    return true;
            }
        }
        return false;
    }
    boolean isValidPlacement(int number, int row, int col){
        return !isNumberInRow(number, row) &&
                !isNumberInColumn(number, col) &&
                !isNumberInBox(number, row, col);
    }

    boolean solveBoard(){
        for(int i=0; i < N; i++){
            for(int j=0; j < N; j++){
                if(board[i][j] == 0){
                    List<Integer> attempts = new ArrayList<>(List.of(1,2,3,4,5,6,7,8,9));
                    Collections.shuffle(attempts);
                    while (!attempts.isEmpty()){
                        int value = attempts.removeLast();
                        if(isValidPlacement(value,i, j)){
                            board[i][j] = value;
                            if(solveBoard()) { // if the next also true return true
                                return true;
                            } else{
                                board[i][j] = 0;  // if the next one is not true backtrack and set this value 0 and
                                // check the next number
                            }
                        }

                    }
                    return false; // non of the numbers are valid (i, j) spot, back track
                }
            }
        }
        return true;
    }

    //remove k number of elements from the board
    public int[][] removeElements(int [][] newBoard){
        List<Integer> positions = new ArrayList<>(N*N);

        for(int i=0; i<N * N ; i++){
            positions.add(i);
        }
        Collections.shuffle(positions, random);

        for(int i=0; i < K; i++){
            int pos = positions.get(i);
            int row = pos / N;
            int col = pos % N;
            newBoard[row][col] = 0; // remove the element
        }
        return newBoard;
    }

    //print
    public static void print(int [][] a){
        for(int i=0; i<a.length; i++){
            for(int j=0; j<a[0].length; j++){
                System.out.print(a[i][j] + ", ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        BoardGenerator bg = new BoardGenerator(9,30);
        int [][] board = bg.getBoard();
        print(board);
        int[][] solution = bg.getSolution();
        System.out.println("-------------------------------");
        print(solution);

    }

}

