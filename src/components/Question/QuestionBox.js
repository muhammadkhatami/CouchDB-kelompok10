import React, { useState } from "react";

import { Card, CardHeader, CardBody, RadioButtonGroup } from "grommet";
import "./style.css";

const QuestionBox = ({ question, options, selected, index }) => {
  const [answer, setAnswer] = useState();

  return (
    <Card style={{ padding: "1rem", marginBottom: "1.5rem" }}>
      <CardHeader style={{ marginBottom: "0.75rem" }}>
        <label className="question-label">Question #{index}</label>
      </CardHeader>
      <CardBody>
        <div className="question-title">{question}</div>
        <RadioButtonGroup
          style={{ textTransform: "capitalize", fontSize: "1rem" }}
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
