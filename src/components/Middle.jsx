// Import necessary components, images and stylings
import Option from "../components/Option"; // 'Option' component used to render each game option
import pentagon from "../assets/bg-pentagon.svg"; // Background image
import "../styles/Middle.scss"; // Import stylesheet

// Middle is a functional Component representing the main game area
function Middle(props) {
  const options = props.options;
  const appChoice = props.appChoice;
  const playerChoice = props.playerChoice;
  const playerWon = props.playerWon;

  return (
    // 'Middle' div wrapping the game area
    <div className="Middle">
      {props.isChoosing ? (
        // If player is choosing, render the pentagon game layout
        <div className="pentagon">
          <img src={pentagon} alt="" />
          {/* Map through options array to render each game option */}
          {options.map((option) => (
            <Option
              key={option.name}
              optionName={option.name}
              imageSrc={option.image}
              handleOptionClick={props.handleOptionClick}
            />
          ))}
        </div>
      ) : (
        <>
          {/* If player has chosen, show what the player and 'house' picked */}
          <div className="result-left">
            <div className="player-result">
              <p>YOU PICKED</p>
              {/* Display the chosen option */}
              <Option
                optionName={playerChoice.name}
                imageSrc={playerChoice.image}
              />
            </div>
          </div>
          <div className="result-middle">
            <div className="game-message">
              {playerWon ? <h1>YOU WIN</h1> : <h1>YOU LOSE</h1>}
              <button onClick={props.playAgain}>PLAY AGAIN</button>
            </div>
          </div>
          <div className="reult-right">
            <div className="house-result">
              <p>THE HOUSE PICKED</p>
              {/* In real game, the house option should be determined by the game engine/logic */}
              <Option
                optionName={appChoice.name}
                imageSrc={appChoice.image}
                handleOptionClick={() => {}} //empty function on purpose
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Export 'Middle' component so it can be imported and used in other files
export default Middle;
