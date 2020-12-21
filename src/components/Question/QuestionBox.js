import React, { useState } from "react";
// import "../style.css";

// Function to Question inside our app
const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
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
