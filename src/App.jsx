import { useEffect, useState } from "react";
import Top from "./components/Top.jsx";
import Middle from "./components/Middle.jsx";
import Rules from "./components/Rules.jsx";
import Bottom from "./components/Bottom.jsx";
import lizard from "./assets/icon-lizard.svg";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
import scissors from "./assets/icon-scissors.svg";
import spock from "./assets/icon-spock.svg";
import "./App.scss";

// Game options defined outside of the App component
const gameOptions = [
  { name: "scissors", image: scissors, canDefeat: ["paper", "lizard"] },
  { name: "paper", image: paper, canDefeat: ["rock", "spock"] },
  { name: "rock", image: rock, canDefeat: ["scissors", "lizard"] },
  { name: "lizard", image: lizard, canDefeat: ["paper", "spock"] },
  { name: "spock", image: spock, canDefeat: ["scissors", "rock"] },
];

const whoWon = (playerChoice, appChoice) => {
  let playerWon = true;
  const choice1 = playerChoice;
  const choice2 = appChoice;
  const choice1Name = choice1.name;
  const choice2CanDefeat = choice2.canDefeat;
  if (choice1 === choice2) {
    playerWon = false;
  } else {
    for (const item of choice2CanDefeat) {
      if (item === choice1Name) {
        playerWon = false;
      }
    }
  }
  return playerWon;
};

const scoreIncrease = (playerWon, setScore) => {
  if (playerWon) {
    setScore((prevScore) => prevScore + 1);
  }
};

// Function to select a random option
const getRandomOption = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const App = () => {
  const [score, setScore] = useState(0);
  const [isChoosing, setIsChoosing] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [appChoice, setAppChoice] = useState("");
  const [playerWon, setPlayerWon] = useState(false);

  useEffect(() => {
    scoreIncrease(playerWon, setScore);
  }, [appChoice]);

  const toggleRules = (status) => {
    setShowRules(status);
  };

  const handleOptionClick = (clicked) => {
    const playerChoice = gameOptions.find((option) => option.name === clicked);
    const appChoice = getRandomOption(gameOptions);
    setPlayerChoice(playerChoice);
    setAppChoice(appChoice);
    setIsChoosing(false);
    setPlayerWon(whoWon(playerChoice, appChoice));
  };

  const PlayAgain = () => {
    setIsChoosing(true);
  };

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
          playAgain={PlayAgain}
        />
        <Bottom openRules={toggleRules} />
      </div>
    </>
  );
};

export default App;
