import React from "react";
import PouchDB from "pouchdb-browser";
import { Grommet, Box } from "grommet";
import { grommet } from "grommet/themes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { COUCH_URL, COUCH_DATABASE } from "../../constants";
import Header from "../../components/Header";
import OfflineMessage from "../../components/OfflineMessage";
import Home from "../Home";
import LoginPage from "../LoginPage";
import ConfirmationPage from "../ConfirmationPage";

const db = new PouchDB("reading_lists");
const remoteDatabase = new PouchDB(`${COUCH_URL}/${COUCH_DATABASE}`, {
  headers: {
    Authorization: "Basic YWRtaW46cGFzc3dvcmQ=",
  },
});

PouchDB.sync(db, remoteDatabase, {
  live: true,
  heartbeat: false,
  timeout: false,
  retry: true,
});

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = { online: true };
    this.heartBeat.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.heartBeat();
  }

  heartBeat() {
    if (!this.mounted) {
      return;
    }
    const fetchInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    };
    const fetchRequest = new Request(`${COUCH_URL}/_up`, fetchInit);

    fetch(fetchRequest)
      .then((result) => {
        if (!this.mounted) {
          return;
        }
        if (result.ok && !this.state.online) {
          this.setState({
            online: true,
          });
        } else if (!result.ok && this.state.online) {
          this.setState({
            online: false,
          });
        }
        setTimeout(this.heartBeat.bind(this), 2000);
      })
      .catch(() => {
        if (!this.mounted) {
          return;
        }
        if (this.state.online) {
          this.setState({
            online: false,
          });
        }
        setTimeout(this.heartBeat.bind(this), 2000);
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { online } = this.state;

    return (
      <Grommet full={true} theme={grommet}>
        <Box fill={true}>
          <Box fill>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <LoginPage />
                </Route>
                <Route exact path="/confirm">
                  <ConfirmationPage />
                </Route>
                <Route exact path="/quiz">
                  <Home db={db} />
                </Route>
              </Switch>
            </Router>
          </Box>
          <OfflineMessage online={online} />
        </Box>
      </Grommet>
    );
  }
}

export default App;
