import React from 'react'; 
// import "../style.css";
import questionBox from "../Question/QuestionBox"


const Result = ({score, length, playAgain}) => (
<div className="score-board"> 
	<div className="score"> Your score is {score} / {length} correct answer ! ! ! </div>
	<button className="playBtn" onClick={playAgain} > Play Again </button> 
</div> 
) 

export default Result; 
