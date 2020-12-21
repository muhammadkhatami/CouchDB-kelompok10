import React from "react";
import { Button } from "grommet";
import "./style.css";

const Result = ({ score, length, playAgain }) => (
  <div className="score-board">
    <div className="score">
      Your final score is
      <span>{((score / length) * 100).toFixed(2)}</span>
    </div>
    <Button
      primary
      label="Play Again"
      onClick={playAgain}
      style={{ marginTop: "2rem" }}
    />
  </div>
);

export default Result;
