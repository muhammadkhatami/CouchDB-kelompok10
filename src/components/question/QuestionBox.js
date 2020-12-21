import React, { useState } from "react";
// import "../style.css";

// Function to question inside our app
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  console.log(answer);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {!!answer &&
        answer.map((text, index) => (
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
          >
            {text}
          </button>
        ))}
    </div>
  );
};

export default QuestionBox;
