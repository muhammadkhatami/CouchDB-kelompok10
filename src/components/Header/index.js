import React from "react";
import { Box } from "grommet";

import * as Styled from "./styles";

let time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
let day = new Date().toLocaleDateString();

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
      margin={{ right: "medium", left: "medium" }}
    >
      <Styled.LogoImage
        fit="cover"
        src="http://couchdb.apache.org/image/couch@2x.png"
      />
    </Box>
    <Box
      tag="div"
      direction="row"
      responsive
      justify="between"
      margin={{ right: "medium", left: "medium" }}
    >
      <Styled.StyledLink to="/">{day}, {time}</Styled.StyledLink>
    </Box>
  </Box>
);

export default Header;
