import "../styles/ScoreBoard.scss";
import logo from "../assets/logo-bonus.svg";
import { useState } from "react";

function ScoreBoard(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="score-board">
      <div className="board">
        <img src={logo} alt="bruh" />
        <div>
          <p className="score">score</p>
          <p className="score-number">{count}</p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
