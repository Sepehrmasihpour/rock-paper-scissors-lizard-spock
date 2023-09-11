import { useState, useEffect } from "react";
import Top from "./components/Top.jsx"; //the component with the logo and the scoreboard
import Middle from "./components/Middle.jsx"; //the component with the options the player can pick
import Rules from "./components/Rules.jsx"; //self explanatory
import Bottom from "./components/Bottom.jsx"; //the bottom part of the app with the rules button
import "./App.scss";

// This is the main App function component
function App() {
  // We are using the useState hook to manage the state of our app
  const [data, setData] = useState({
    score: 0,
    playerChoosing: true,
    showRules: false,
    choice: "",
    appChoice: "",
  });

  // useEffect hook is used to perform side effects in function components
  // In this case, we are toggling the playerChoosing state every time data.choice changes
  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      playerChoosing: !prevState.playerChoosing,
    }));
  }, [data.choice]);

  useEffect(() => {
    if (!data.playerChoosing) {
      setData((prevState) => ({
        ...prevState,
        appChoice: randomOption(),
      }));
    }
  }, [data.playerChoosing]);

  // This function is used to set the choice of the player
  const playerPick = (clicked) => {
    setData((prevState) => ({ ...prevState, choice: clicked }));
  };

  // This function is used to change the visibility of the rules
  const changeRulesStatus = (status) => {
    setData((prevState) => ({ ...prevState, showRules: status }));
  };

  const randomOption = () => {
    const options = ["scissors", "rock", "spock", "lizard", "paper"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    return randomOption;
  };

  // The component returns the JSX to be rendered
  // It conditionally renders the Rules component and the Options or Result components based on the state
  return (
    <>
      {/* If showRules is true, the Rules component is rendered */}
      {data.showRules && <Rules closeRules={changeRulesStatus} />}
      <div className="container">
        <Top score={data.score} />
        <Middle
          playerPick={playerPick}
          playerChoosing={data.playerChoosing}
          choice={data.choice}
        />
        <Bottom openRules={changeRulesStatus} />
      </div>
    </>
  );
}

export default App;
