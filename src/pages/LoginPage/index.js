import React from "react";
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
      isLoggedIn: "",
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };



  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      localStorage.setItem("isLoggedIn", "yes");
      localStorage.setItem("username", this.state.username);
      this.props.history.push("/quiz");
    }

    const data = {
      username: this.state.username,
      password: this.state.password,
      isLoggedIn: "true",
    };

    console.log(data);

    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <LoginPageContainer>
        <div className="left-container">
          <img src={login} alt="Login Assets" />
        </div>
        <div className="right-container">
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
          <div style={{ width: "480px" }}>
            <Button
              label="LOGIN"
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
