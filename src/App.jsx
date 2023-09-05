import ScoreBoard from "./components/ScoreBoard.jsx";
import Options from "./components/Options.jsx";
import Rules from "./components/Rules.jsx";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <ScoreBoard />
      <Options />
      <Rules />
    </div>
  );
}

export default App;
