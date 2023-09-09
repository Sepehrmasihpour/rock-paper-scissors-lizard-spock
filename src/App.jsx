import { useState, useEffect } from "react";
import ScoreBoard from "./components/ScoreBoard.jsx"; //the component with the logo anf the scoreboard
import Options from "./components/Options.jsx"; //the component with the options the player can pick
import Rules from "./components/Rules.jsx"; //self explanatory
import Bottom from "./components/Bottom.jsx"; //the bottom part of the app with the rules button
import Result from "./components/Result.jsx"; //the component with the result of the match
import "./App.scss";

function App() {
  const [score, setSCore] = useState(0); //the overall score of the player
  const [playerChoosing, setChoosing] = useState(true); //for conditionall rendering if the player is choosing or has chosen
  const [showRules, setShow] = useState(false); //if true the rules will show
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

  //if this fumction is called the showRules state will turn to status witch will be either true or false and Rules compoment will not/be rendered
  const changeRulesStatus = (status) => {
    setShow(status);
  };

  const scorePlusOne = () => {
    setSCore((prevScore) => prevScore + 1);
  };

  return (
    <>
      {showRules && <Rules closeRules={changeRulesStatus} />}
      <div className="container">
        <ScoreBoard score={score} />
        {playerChoosing ? (
          <>
            <Options playerPick={playerPick} />
          </>
        ) : (
          <Result />
        )}
        <Bottom openRules={changeRulesStatus} />
      </div>
    </>
  );
}

export default App;
