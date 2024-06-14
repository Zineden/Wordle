# Wordle Clone Application

##Video demonstration

https://github.com/Zineden/Wordle/assets/83392181/05df6259-55fe-484e-b488-a3260226d7a6

## Introduction
I created this Wordle clone application using React to practice and improve my React skills. As a huge fan of the Wordle game, I was inspired to replicate it due to my frequent play and enjoyment. Currently, I am working on another application inspired by Wordle but tailored to another game I enjoy.

## Features
- **Word Guessing Game:** Similar to the original Wordle, players have a limited number of attempts to guess the correct word.
- **Responsive Design:** The application is designed to work seamlessly on various screen sizes, ensuring a smooth experience on both desktop and mobile devices.
- **Interactive UI:** Engaging and interactive user interface that provides feedback on each guess.
- **Word Validation:** Each guess is validated to ensure it's a valid word.

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **CSS:** Styling the components for a clean and responsive design.
- **JavaScript:** Logic for game mechanics and interactivity.
- **JSON Server:** Simple backend for storing and managing word data.

## Installation and Setup
To run this application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Zineden/Wordle.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd wordle-clone
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up the JSON database:**
    ```bash
    npx json-server --watch data/db.json --port 8000
    ```
   This command starts a local server and watches the `data/db.json` file for changes. The server will run at `http://localhost:8000`.

5. **Start the development server:**
    ```bash
    npm start
    ```
   The application will open in your default browser at `http://localhost:3000`.


## How to Play
1. The player has six attempts to guess a hidden word.
2. Each guess must be a valid five-letter word.
3. After each guess, the color of the tiles will change to show how close your guess was to the word:
   - **Green:** The letter is in the correct position.
   - **Yellow:** The letter is in the word but in the wrong position.
   - **Grey:** The letter is not in the word.

## Future Plans
I am currently working on an application inspired by Wordle but specific to another game I enjoy. Stay tuned for updates and new features!
