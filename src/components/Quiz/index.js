import React from "react";
import { Box, Button } from "grommet";
import questionAPI from "../Question/index.js";
import QuestionBox from "../Question/QuestionBox";
import Result from "../Question/ResultBox";

export class AddToRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      questionBank: [],
      score: 0,
      length: 0,
      responses: 0,
      submited: 0,
      correctlyAnsweredQuestion: [],
    };

    this.changeName.bind(this);
    this.addElement.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  // Function to get Question from ./Question
  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
    });
  };

  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
      submited: 0,
      correctlyAnsweredQuestion: [],
    });
  };

  // Function to compute scores
  computeAnswer = (answer, correctAns, questionId) => {
    const {
      correctlyAnsweredQuestion,
      score,
      responses,
      questionBank: { length },
    } = this.state;

    if (
      answer === correctAns &&
      !correctlyAnsweredQuestion.includes(questionId)
    ) {
      this.setState({
        score: score + 1,
        correctlyAnsweredQuestion: [...correctlyAnsweredQuestion, questionId],
      });
    } else if (
      answer !== correctAns &&
      correctlyAnsweredQuestion.includes(questionId)
    ) {
      this.setState({ score: score - 1 });
    }

    this.setState({
      responses: responses < length ? responses + 1 : length,
    });
  };

  // componentDidMount function to get Question
  componentDidMount() {
    this.getQuestions();
  }

  addElement() {
    const finalScore = (
      (this.state.score / this.state.questionBank.length) *
      100
    ).toFixed(2);
    const currentdate = new Date();
    const datetime =
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
    this.props.db.put({
      _id: new Date().toJSON(),
      submit_datetime: datetime,
      score: finalScore,
    });
    this.state.submited = 1;
    this.forceUpdate();
  }

  render() {
    return (
      <Box>
        <Box>
          <div className="container">
            <h2>Pop Quiz!</h2>
            {this.state.questionBank.length > 0 &&
              // this.state.responses < this.state.questionBank.length &&
              this.state.submited != 1 &&
              this.state.questionBank.map(
                ({ question, answers, correct, questionId }) => (
                  <QuestionBox
                    question={question}
                    options={answers}
                    key={questionId}
                    index={questionId}
                    selected={(answer) =>
                      this.computeAnswer(answer, correct, questionId)
                    }
                  />
                )
              )}
            {this.state.submited == 0 ? (
              <Box align="end">
                <Button
                  primary
                  label="Submit"
                  onClick={() => this.addElement()}
                />
              </Box>
            ) : (
              <div />
            )}

            {this.state.submited == 1 ? (
              <Result
                score={this.state.score}
                length={this.state.questionBank.length}
                playAgain={this.playAgain}
              />
            ) : (
              <div />
            )}
          </div>
        </Box>
      </Box>
    );
  }
}

export default AddToRead;
