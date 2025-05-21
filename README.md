# Sudoku Game

This is a web-based Sudoku game application built using Spring Boot. It allows users to play Sudoku puzzles of varying difficulty levels.

## Technologies Used

*   Java 21
*   Spring Boot 3.2.2
*   Maven
*   Thymeleaf

## Features

*   **Dynamic Sudoku Board Generation:** Generates a new Sudoku puzzle each time you start a game.
*   **Multiple Difficulty Levels:**
    *   **Easy:** Starts with 20 empty cells.
    *   **Medium:** Starts with 30 empty cells.
    *   **Hard:** Starts with 40 empty cells.
*   **Interactive Web Interface:** Play Sudoku directly in your browser.
*   **Solution Generation:** The backend generates the complete solution for each puzzle.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Java Development Kit (JDK):** Version 21 or higher.
*   **Apache Maven:** Version 3.6.x or higher (though any recent version should generally work).

## How to Build and Run

The Sudoku application is contained within the `sudoku-1` directory.

1.  **Navigate to the application directory:**
    The Sudoku application is located in the `sudoku-1` sub-directory. Navigate into it from the root of the repository:
    ```bash
    cd sudoku-1
    ```
    All subsequent build and run commands should be executed from within this `sudoku-1` directory.

2.  **Build the project using Maven:**
    Open a terminal in the `sudoku-1` directory and run:
    ```bash
    mvn clean install
    ```
    This command will compile the code, run tests, and package the application into a JAR file (e.g., `target/sudoku-0.0.1-SNAPSHOT.jar`).

3.  **Run the application:**
    There are a couple of ways to run the Spring Boot application:

    *   **Using Maven Spring Boot plugin (recommended for development):**
        In the `sudoku-1` directory, run:
        ```bash
        mvn spring-boot:run
        ```
    *   **Using the executable JAR:**
        After building the project, from the `sudoku-1` directory, run the JAR file:
        ```bash
        java -jar target/sudoku-0.0.1-SNAPSHOT.jar
        ```

4.  **Access the application:**
    Once the application is running (it typically uses port 8080 by default), open your web browser and go to:
    [http://localhost:8080/](http://localhost:8080/)

    You should see the Sudoku game interface.

## How to Play

Once the application is running and you have accessed it in your browser:

1.  The main page (`/`) will present you with a Sudoku board of "easy" difficulty by default.
2.  Fill in the empty cells with numbers from 1 to 9, ensuring that each number appears only once in each row, column, and 3x3 subgrid.
3.  To play different difficulty levels, you can navigate to the following URLs:
    *   **Easy:** `/level/easy` (20 empty cells)
    *   **Medium:** `/level/medium` (30 empty cells)
    *   **Hard:** `/level/hard` (40 empty cells)

## Project Structure (Inside `sudoku-1/`)

A brief overview of the key directories within the `sudoku-1` application folder:

*   `src/main/java/com/example/`: Contains the main Java source code.
    *   `SudokuApplication.java`: The main Spring Boot application class.
    *   `controller/`: Contains `SudokuController.java` which handles web requests and maps them to views.
    *   `service/`: Likely contains business logic like `BoardGenerator.java` for creating Sudoku puzzles. (The presence of `BoardGenerator` is inferred from `SudokuController.java`).
*   `src/main/resources/`:
    *   `static/`: For static assets like CSS, JavaScript, and images (if any).
    *   `templates/`: Contains Thymeleaf templates (e.g., `sudoku.html`) used to render the web pages.
    *   `application.properties`: Configuration file for the Spring Boot application.
*   `pom.xml`: The Maven Project Object Model file, defining project dependencies, build configurations, and metadata.
*   `target/`: This directory is created during the build process and contains the compiled code and packaged JAR file.
