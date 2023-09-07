import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Options from "./components/Options.jsx";
import Rules from "./components/Rules.jsx";
import "./App.scss";

function App() {
  const [score, setSCore] = useState(0);
  const [playerChoosing, setChoosing] = useState(true);

  const scorePlusOne = () => {
    setSCore((prevScore) => prevScore + 1);
  };

  return (
    <div className="container">
      {playerChoosing ? (
        <>
          <ScoreBoard score={score} />
          <Options />
          <Rules />
        </>
      ) : (
        <p>bruh</p>
      )}
    </div>
  );
}

export default App;
