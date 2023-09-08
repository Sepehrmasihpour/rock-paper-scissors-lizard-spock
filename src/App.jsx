import { useState, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Options from "./components/Options.jsx";
import Rules from "./components/Rules.jsx";
import "./App.scss";

function App() {
  const [score, setSCore] = useState(0); //the overall score of the player
  const [playerChoosing, setChoosing] = useState(true); //for conditionall rendering if the player is choosing or has chosen
  const [showRules, setShow] = useState(true); //if true the rules will show
  const [choice, setchoice] = useState(""); //the option that the player has chosen
  const [appChoice, setAppChoice] = useState(""); //the option that the app has chosen

  // the options the player can choose and the options that they can beat
  const options = {
    scissors: ["paper", "lizard"], //example: scissors beats paper and lizard
    paper: ["rock", "spock"],
    rock: ["scissors", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  useEffect(() => {
    setChoosing((a) => !a);
  }, [choice]);

  const playerPick = (clicked) => {
    setchoice(clicked);
  };

  //if this fumction is called the showRules state will turn to false and Rules compoment will not/stop be rendered
  const closeRules = () => {
    setShow(false);
  };

  const scorePlusOne = () => {
    setSCore((prevScore) => prevScore + 1);
  };

  return (
    <>
      {showRules && <Rules closeRules={closeRules} />}
      <div className="container">
        {playerChoosing ? (
          <>
            <ScoreBoard score={score} />
            <Options playerPick={playerPick} />
          </>
        ) : (
          <p>bruh</p>
        )}
      </div>
    </>
  );
}

export default App;
