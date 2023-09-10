// Importing the Bottom.scss file
import "../styles/Bottom.scss";

// Defining the Bottom component
// This component takes in props and returns a div with a button
// The button, when clicked, triggers the openRules function from the props with the argument 'true'
function Bottom(props) {
  return (
    <div className="bottom">
      {/* Button for showing rules */}
      <button className="show-rules" onClick={() => props.openRules(true)}>
        RULES
      </button>
    </div>
  );
}

// Exporting the Bottom component as the default export
export default Bottom;
