import "../styles/Options.scss";
import pentagon from "../assets/bg-pentagon.svg";
import lizard from "../assets/icon-lizard.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import spock from "../assets/icon-spock.svg";

function Options() {
  return (
    <div className="Options">
      <div className="pentagon">
        <img src={pentagon} alt="" />
        <div className="scissors">
          <img src={scissors} alt="" />
        </div>
        <div className="paper">
          <img src={paper} alt="" />
        </div>
        <div className="rock">
          <img src={rock} alt="" />
        </div>
        <div className="lizard">
          <img src={lizard} alt="" />
        </div>
        <div className="spock">
          <img src={spock} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Options;
