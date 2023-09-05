import "../styles/ScoreBoard.scss";
import logo from "../assets/logo-bonus.svg";
import { useState } from "react";

function ScoreBoard(props) {
  const [count, setCount] = useState(0);

  function plus() {
    setCount((a) => a + 1);
  }
  return (
    <div className="score-board">
      <div className="board">
        <img src={logo} alt="bruh" />
        <div>
          <p className="score">score</p>
          <p className="score-number">{count}</p>
        </div>
      </div>
      <button onClick={plus}>plus</button>
    </div>
  );
}

export default ScoreBoard;
