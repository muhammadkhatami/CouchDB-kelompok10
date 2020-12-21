import React, { useState } from "react";
import { Card, CardHeader, CardBody, RadioButtonGroup } from "grommet";
import "./style.css";

// Function to Question inside our app
const QuestionBox = ({ question, options, selected, index }) => {
  const [answer, setAnswer] = useState();
  return (
    <Card style={{ padding: "1rem", marginBottom: "1.5rem" }}>
      <CardHeader style={{ marginBottom: "0.75rem" }}>
        <label style={{ fontSize: "1rem", color: "#aaa" }}>
          <strong>Question #{index}</strong>
        </label>
      </CardHeader>
      <CardBody>
        <div className="question">{question}</div>
        <RadioButtonGroup
          name={`question-${index}`}
          id={`question-${index}`}
          options={options}
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
            selected(event.target.value);
          }}
        />
      </CardBody>
    </Card>
  );
};

export default QuestionBox;
