import React from "react";
import { Box, Button } from "grommet";
import questionAPI from "../Question";
import QuestionBox from "../Question/QuestionBox";
import Result from "../Question/ResultBox";

export class Quiz extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      submitted: false,
      correctQuestionAnswered: 0,
      correctlyAnsweredQuestionId: [],
      finalScore: 0,
      minute: 0,
      second: 10,
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
      minute:3,
      second:2,
    });
    this.componentDidMount();
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

  timer = () => {
    this.myInterval = setInterval(() => {
      const { second, minute } = this.state

      if (second > 0) {
        this.setState(({ second }) => ({
          second: second - 1
        }))
      }
      if (second === 0) {
        if (minute === 0) {
          clearInterval(this.myInterval)
          this.handleSubmit();
        } else {
          this.setState(({ minute }) => ({
            minute: minute - 1,
            second: 59
          }))
        }
      }
    }, 1000)
  }

  componentDidMount() {
    this.getQuestions();
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
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
  }

  render() {
    const { questionBank, submitted, finalScore, minute, second } = this.state;

    return (
        <Box>
          <h2>Pop Quiz!</h2>
          {!submitted && (
              <h3>
                Time remaining: {minute}:{second < 10 ? `0${second}` : second}
              </h3>
          )}

          <div>
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

            {submitted && (
                <Result score={finalScore} playAgain={this.playAgain} />
            )}
          </div>
        </Box>
    );
  }
}
export default Quiz;
