// Importing necessary libraries and components for the app
import { useEffect, useState } from "react";
import Top from "./components/Top.jsx";
import Middle from "./components/Middle.jsx";
import Rules from "./components/Rules.jsx";
import Bottom from "./components/Bottom.jsx";

// Importing game option images
import lizard from "./assets/icon-lizard.svg";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
import scissors from "./assets/icon-scissors.svg";
import spock from "./assets/icon-spock.svg";

// Importing styles
import "./App.scss";

// Array of game options, each with a name, image, and an array of options it can defeat
const gameOptions = [
  { name: "scissors", image: scissors, canDefeat: ["paper", "lizard"] },
  { name: "paper", image: paper, canDefeat: ["rock", "spock"] },
  { name: "rock", image: rock, canDefeat: ["scissors", "lizard"] },
  { name: "lizard", image: lizard, canDefeat: ["paper", "spock"] },
  { name: "spock", image: spock, canDefeat: ["scissors", "rock"] },
];

// Function to determine the winner, returns true if player wins
const whoWon = (playerChoice, appChoice) => {
  let playerWon = true;
  playerWon = !appChoice.canDefeat.includes(playerChoice.name);
  return playerWon;
};

// Function to increase the score if player wins
const scoreIncrease = (playerWon, setScore) => {
  setTimeout(function () {
    if (playerWon) {
      setScore((prevScore) => prevScore + 1);
    }
  }, 2300);
};

// Function to select a random option from the game options
const getRandomOption = (options, chosenOption) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  if (options[randomIndex] === chosenOption) {
    return getRandomOption(options, chosenOption);
  }
  return options[randomIndex];
};

// Main App component
const App = () => {
  // State variables for the game
  const [score, setScore] = useState(0);
  const [isChoosing, setIsChoosing] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [appChoice, setAppChoice] = useState("");
  const [playerWon, setPlayerWon] = useState(false);

  // Increase score whenever appChoice changes
  useEffect(() => {
    scoreIncrease(playerWon, setScore);
  }, [appChoice]);

  // Function to toggle rules visibility
  const toggleRules = (status) => {
    setShowRules(status);
  };

  // Function to handle option click and game logic
  const handleOptionClick = (clicked) => {
    const playerChoice = gameOptions.find((option) => option.name === clicked);
    const appChoice = getRandomOption(gameOptions, playerChoice);
    setPlayerChoice(playerChoice);
    setAppChoice(appChoice);
    setIsChoosing(false);
    setPlayerWon(whoWon(playerChoice, appChoice));
  };

  // Function to reset the game for another round
  const playAgain = () => {
    setIsChoosing(true);
  };

  // Render the game components
  return (
    <>
      {showRules && <Rules closeRules={toggleRules} />}
      <div className="container">
        <Top score={score} />
        <Middle
          handleOptionClick={handleOptionClick}
          isChoosing={isChoosing}
          playerChoice={playerChoice}
          appChoice={appChoice}
          options={gameOptions}
          playerWon={playerWon}
          playAgain={playAgain}
        />
        <Bottom openRules={toggleRules} />
      </div>
    </>
  );
};

export default App;
