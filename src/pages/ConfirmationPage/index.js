import React, { Component } from "react";
import { Box, Button, Card, CardHeader, CardBody } from "grommet";
import Modal from "../../components/Modal";
import { withRouter } from "react-router-dom";

class ConfirmationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  componentDidMount = () => {
    if (!localStorage.getItem("isLoggedIn")) {
      this.props.history.push("/");
    }
  };

  openModal = () => {
    this.setState({ isShow: true });
  };

  closeModal = () => {
    this.setState({ isShow: false });
  };

  pushToQuiz = () => {
    this.props.history.push("/quiz");
  };

  render() {
    const { isShow } = this.state;

    return (
      <Box
        style={{
          height: "100vh",
        }}
      >
        <Card
          style={{
            padding: "1.5rem",
            minWidth: "30rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "6rem",
          }}
        >
          <CardHeader>
            <h1
              style={{
                textAlign: "center",
                marginBottom: "1.5rem",
              }}
            >
              Pop Quiz
            </h1>
          </CardHeader>
          <CardBody>
            <label style={{ marginBottom: "0.75rem", fontSize: 16 }}>
              Time Limit: <strong>10 minutes</strong>
            </label>
            <label style={{ marginBottom: "0.75rem", fontSize: 16 }}>
              Total Questions: <strong>5</strong>
            </label>
            <label style={{ marginBottom: "1.5rem", fontSize: 16 }}>
              Topic: <strong>General Knowledge</strong>
            </label>
            <Button label="Attempt Quiz Now" primary onClick={this.openModal} />
          </CardBody>
        </Card>

        <Modal
          title="Timed Quiz"
          message="The quiz has a time limit of 30 mins. Time will count down from the moment you start your attempt and you must submit before it expires. Are you sure that you wish to start now?"
          show={isShow}
          handleClose={this.closeModal}
          handleSubmit={this.pushToQuiz}
        />
      </Box>
    );
  }
}

export default withRouter(ConfirmationPage);
