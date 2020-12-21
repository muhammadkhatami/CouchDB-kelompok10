import React from 'react'; 
// import "../style.css"; 

const Result = ({score, playAgain}) => ( 
<div className="score-board"> 
	<div className="score"> Your score is {score} / 5 correct answer ! ! ! </div> 
	<button className="playBtn" onClick={playAgain} > Submit and Retake </button> 
</div> 
) 

export default Result; 
