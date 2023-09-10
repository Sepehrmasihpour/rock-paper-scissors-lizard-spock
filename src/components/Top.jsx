import "../styles/Top.scss";
import logo from "../assets/logo-bonus.svg";

function Top(props) {
  return (
    <div className="Top">
      <div className="score-board">
        <img src={logo} alt="bruh" />
        <div>
          <p className="score">score</p>
          <p className="score-number">{props.score}</p>
        </div>
      </div>
    </div>
  );
}

export default Top;
