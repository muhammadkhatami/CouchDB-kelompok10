import React from "react";

import { Box, Button } from "grommet";
import questionAPI from "../Question";
import QuestionBox from "../Question/QuestionBox";
import Result from "../Question/ResultBox";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      submitted: false,
      correctQuestionAnswered: 0,
      correctlyAnsweredQuestionId: [],
      finalScore: 0,
    };

    this.handleSubmit.bind(this);
  }

  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      submitted: false,
      correctQuestionAnswered: 0,
      correctlyAnsweredQuestionId: [],
      finalScore: 0,
    });
  };

  computeAnswer = (answer, correctAnswer, questionId) => {
    const { correctlyAnsweredQuestionId, correctQuestionAnswered } = this.state;

    if (
      answer === correctAnswer &&
      !correctlyAnsweredQuestionId.includes(questionId)
    ) {
      this.setState({
        correctQuestionAnswered: correctQuestionAnswered + 1,
        correctlyAnsweredQuestionId: [
          ...correctlyAnsweredQuestionId,
          questionId,
        ],
      });
    } else if (
      answer !== correctAnswer &&
      correctlyAnsweredQuestionId.includes(questionId)
    ) {
      this.setState({ correctQuestionAnswered: correctQuestionAnswered - 1 });
    }
  };

  componentDidMount() {
    this.getQuestions();
  }

  handleSubmit() {
    const {
      correctQuestionAnswered,
      questionBank: { length },
    } = this.state;

    const { db } = this.props;

    const finalScore = ((correctQuestionAnswered / length) * 100).toFixed(2);
    const currentdate = new Date();
    const dateTime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    db.put({
      _id: new Date().toJSON(),
      submit_datetime: dateTime,
      score: finalScore,
    });

    this.setState({ submitted: true, finalScore });
    this.forceUpdate();
  }

  render() {
    const { questionBank, submitted, finalScore } = this.state;

    return (
      <Box>
        <h2>Pop Quiz!</h2>
        {!submitted &&
          questionBank.length > 0 &&
          questionBank.map(
            ({ question, answers, correct, questionId }, index) => (
              <QuestionBox
                key={questionId}
                index={index + 1}
                question={question}
                options={answers}
                selected={(answer) =>
                  this.computeAnswer(answer, correct, questionId)
                }
              />
            )
          )}

        {!submitted && (
          <Box align="end">
            <Button
              primary
              label="Submit"
              onClick={() => this.handleSubmit()}
            />
          </Box>
        )}

        {submitted && <Result score={finalScore} playAgain={this.playAgain} />}
      </Box>
    );
  }
}

export default Quiz;
