import React from "react";
import { Button } from "grommet";
import "./style.css";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">
      Your final score is
      <span>{score}</span>
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
