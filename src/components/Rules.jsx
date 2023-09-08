import "../styles/Rules.scss";
import rules from "../assets/image-rules-bonus.svg";
import closeIcon from "../assets/icon-close.svg";

function Rules(props) {
  return (
    <div className="rules-container">
      <div className="rules">
        <div className="rules-header">
          <h2>RULES</h2>
          <img src={closeIcon} onClick={props.closeRules} alt="" />
        </div>
        <img src={rules} alt="" />
      </div>
    </div>
  );
}

export default Rules;
