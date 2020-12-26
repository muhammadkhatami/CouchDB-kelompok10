import React from "react";
import axios from "axios";
import login from "../../assets/login.svg";

import { Button } from "grommet";
import { LoginPageContainer } from "./style";
import { withRouter } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isEmpty: true,
      isError: false,
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("isLoggedIn") === "yes") {
      this.props.history.push("/confirm");
    }
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      this.setState({ isEmpty: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    const data = {
      username,
      password,
    };

    axios
      .post("http://localhost:10010/_session", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "yes");
          localStorage.setItem("role", response.data.roles[0]);
          history.push("/quiz");
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true });
      });

    this.setState({
      username: "",
      password: "",
      isEmpty: true,
    });
  };

  render() {
    const { username, password, isEmpty, isError } = this.state;

    return (
      <LoginPageContainer>
        <div className="left-container">
          <img src={login} alt="Login Assets" />
        </div>
        <div className="right-container">
          {isError && (
            <p className="error-msg">Username or password incorrect!</p>
          )}
          <h1>Pop Quiz App</h1>
          <p>Apache CouchDB</p>
          <div className="form-group">
            <div className="form-control">
              <input
                id="inputUsername"
                type="text"
                name="username"
                onChange={this.changeHandler}
                value={username}
                placeholder="Username"
              />
              <label htmlFor="inputUsername">Username</label>
            </div>
            <hr />
            <div className="form-control">
              <input
                id="inputPassword"
                type="password"
                name="password"
                onChange={this.changeHandler}
                value={password}
                placeholder="Password"
              />
              <label htmlFor="inputPassword">Password</label>
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <Button
              label="LOGIN"
              disabled={isEmpty}
              primary
              onClick={this.handleSubmit}
              style={{ width: "100%", borderRadius: 4, padding: "8px 24px" }}
            />
          </div>
        </div>
      </LoginPageContainer>
    );
  }
}
export default withRouter(LoginPage);
