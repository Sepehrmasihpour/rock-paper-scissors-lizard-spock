import "../styles/Bottom.scss";

function Bottom(props) {
  return (
    <div className="bottom">
      <button className="show-rules" onClick={() => props.openRules(true)}>
        RULES
      </button>
    </div>
  );
}

export default Bottom;
