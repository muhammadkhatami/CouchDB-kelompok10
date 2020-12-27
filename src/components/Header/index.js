import React, { useEffect, useState } from "react";
import { Box, Button } from "grommet";
import { withRouter } from "react-router-dom";

import * as Styled from "./styles";

export const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const time = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = new Date().toLocaleDateString();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "yes") {
      setIsLoggedIn(true);
    }
  });

  function logout() {
    localStorage.clear();
    setIsLoggedIn(false);
    props.history.push("/");
  }

  function renderRightNavbar() {
    if (isLoggedIn) {
      return <Button primary label="Logout" onClick={() => logout()} />;
    } else {
      return (
        <Button primary label="Login" onClick={() => props.history.push("/")} />
      );
    }
  }

  return (
    <Box
      background={{ color: "brand", dark: false }}
      pad="small"
      elevation="small"
      fill="horizontal"
      justify="between"
      responsive
      direction="row"
      tag="header"
    >
      <Box
        tag="div"
        direction="row"
        responsive
        justify="between"
        margin={{ right: "medium", left: "medium" }}
      >
        <Styled.StyledLink to="/confirm">
          {day}, {time}
        </Styled.StyledLink>
      </Box>

      <Box
        tag="div"
        direction="row"
        responsive
        margin={{ right: "medium", left: "medium" }}
      >
        <Styled.LogoImage
          fit="cover"
          src="http://couchdb.apache.org/image/couch@2x.png"
        />
      </Box>

      <Box align="end">{renderRightNavbar()}</Box>
    </Box>
  );
};

export default withRouter(Header);
