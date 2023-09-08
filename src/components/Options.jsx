import "../styles/Options.scss";
import pentagon from "../assets/bg-pentagon.svg";
import lizard from "../assets/icon-lizard.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import spock from "../assets/icon-spock.svg";

function Options(props) {
  return (
    <div className="Options">
      <div className="pentagon">
        <img src={pentagon} alt="" />
        <div onClick={() => props.playerPick("scissors")} className="scissors">
          <img src={scissors} alt="" />
        </div>
        <div onClick={() => props.playerPick("paper")} className="paper">
          <img src={paper} alt="" />
        </div>
        <div onClick={() => props.playerPick("rock")} className="rock">
          <img src={rock} alt="" />
        </div>
        <div onClick={() => props.playerPick("lizard")} className="lizard">
          <img src={lizard} alt="" />
        </div>
        <div onClick={() => props.playerPick("spock")} className="spock">
          <img src={spock} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Options;
