import Option from "../components/Option";
import pentagon from "../assets/bg-pentagon.svg";
import lizard from "../assets/icon-lizard.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import spock from "../assets/icon-spock.svg";
import "../styles/Middle.scss";

function Middle(props) {
  const options = [
    { name: "scissors", image: scissors },
    { name: "paper", image: paper },
    { name: "rock", image: rock },
    { name: "lizard", image: lizard },
    { name: "spock", image: spock },
  ];

  const chosenOption = options.find((option) => option.name === props.choice);

  return (
    <div className="Middle">
      {props.playerChoosing ? (
        <div className="pentagon">
          <img src={pentagon} alt="" />
          {options.map((option) => (
            <Option
              key={option.name}
              optionName={option.name}
              imageSrc={option.image}
              playerPick={props.playerPick}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="player-result">
            <p>YOU PICKED</p>
            <Option
              optionName={chosenOption.name}
              imageSrc={chosenOption.image}
            />
          </div>
          <div className="house-result">
            <p>THE HOUSE PICKED</p>
            <Option
              optionName={chosenOption.name}
              imageSrc={chosenOption.image}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Middle;
