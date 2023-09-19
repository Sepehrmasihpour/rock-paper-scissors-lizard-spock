// Import necessary components, images and stylings
import Option from "../components/Option"; // Import 'Option' component which is used to render each game option
import pentagon from "../assets/bg-pentagon.svg"; // Import background image for the game layout
import "../styles/Middle.scss"; // Import stylesheet for the 'Middle' component

// 'Middle' is a functional Component representing the main game area
function Middle(props) {
  // Destructure props for better readability and less redundancy
  const {
    options,
    appChoice,
    playerChoice,
    playerWon,
    isChoosing,
    handleOptionClick,
    playAgain,
  } = props;

  return (
    // 'Middle' div wrapping the game area
    // Conditional class name based on whether the player is choosing or not
    <div className={isChoosing ? "Middle" : "Middle-result"}>
      {isChoosing ? (
        // If player is choosing, render the pentagon game layout
        <div className="pentagon">
          <img src={pentagon} alt="Pentagon layout for the game options" />
          {/* Map through 'options' array to render each game option using the 'Option' component */}
          {options.map((option) => (
            <Option
              key={option.name}
              optionName={option.name}
              imageSrc={option.image}
              handleOptionClick={handleOptionClick}
            />
          ))}
        </div>
      ) : (
        <>
          {/* If player has chosen, show what the player and 'house' picked */}
          <div className="choice" id="player-choice">
            <p>YOU PICKED</p>
            {/* Display the chosen option using the 'Option' component */}
            <Option
              optionName={playerChoice.name}
              imageSrc={playerChoice.image}
            />
          </div>
          <div className="game-message">
            {/* Display game outcome based on 'playerWon' boolean */}
            {playerWon ? <h1>YOU WIN</h1> : <h1>YOU LOSE</h1>}
            <button onClick={playAgain}>PLAY AGAIN</button>
          </div>
          <div className="choice" id="app-choice">
            <p>THE HOUSE PICKED</p>
            {/* Display the 'house' choice using the 'Option' component */}
            {/* Note: In a real game, the 'house' option would be determined by the game engine/logic */}
            <Option
              optionName={appChoice.name}
              imageSrc={appChoice.image}
              handleOptionClick={() => {}} // Empty function on purpose, as 'house' option is not clickable
            />
          </div>
        </>
      )}
    </div>
  );
}

// Export 'Middle' component so it can be imported and used in other files
export default Middle;
