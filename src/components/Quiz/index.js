import React from "react";
import { Box, Button, TextInput, Heading } from "grommet";
import { FormAdd } from "grommet-icons";
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
    this.setState({ score: 0, responses: 0, submited: 0 });
  };

  // Function to compute scores
  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses:
        this.state.responses < this.state.questionBank.length
          ? this.state.responses + 1
          : this.state.questionBank.length,
    });
  };

  // componentDidMount function to get Question
  componentDidMount() {
    this.getQuestions();
  }

  addElement() {
    var scr = ((this.state.score/this.state.questionBank.length)*100).toFixed(2);
    var currentdate = new Date();
    var datetime =
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
      score: scr,
    });
    this.state.submited = 1;
    this.forceUpdate()
  }

  render() {
    console.log(this.state.submited)
    return (
      <Box>
        <Box>
          <div className="container">
            <div className="title">QuizOn</div>
            {this.state.questionBank.length > 0 &&
              // this.state.responses < this.state.questionBank.length &&
              this.state.submited != 1 &&
              this.state.questionBank.map(
                ({ question, answers, correct, questionId }) => (
                    <QuestionBox
                    question={question}
                    options={answers}
                    key={questionId}
                    selected={(answer) => this.computeAnswer(answer, correct)}
                  />
                )
              )
              }
              {this.state.submited == 0 ? (
                <button className="playBtn" onClick={this.addElement.bind(this)}>
                  Submit
                </button>
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
