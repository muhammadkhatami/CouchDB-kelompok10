import React from "react";
import {Box, Button} from "grommet";

import * as Styled from "./styles";

let time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
let day = new Date().toLocaleDateString();
function logout(){
  localStorage.clear();
};

export const Header = () => (

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
      tag="nav"
      direction="row"
      responsive
      justify="between"
      margin={{ right: "medium", left: "medium" }}
    >
      <Styled.StyledLink to="/">Kelompok 10</Styled.StyledLink>
    </Box>
    <Box
        tag="div"
        direction="row"
        responsive
        justify="between"
        margin={{ right: "medium", left: "medium" }}
    >
      <Styled.StyledLink to="/quiz">{day}, {time}</Styled.StyledLink>
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


    <Box align="end" style={{ marginBottom: "1rem" }}>
      <Button
          primary
          border={"solid black 1px"}
          label="Logout"
          onClick={() => logout()}
      />
    </Box>


    {/*<Box*/}
    {/*    tag="button"*/}
    {/*    direction="row"*/}
    {/*    responsive*/}
    {/*    justify="between"*/}
    {/*    margin={{ right: "medium", left: "medium" }}*/}
    {/*>*/}
    {/*  <Styled.StyledLink to="/">{day}, {time}</Styled.StyledLink>*/}
    {/*</Box>*/}
  </Box>
);

export default Header;
