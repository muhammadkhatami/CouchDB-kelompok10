import React from "react";
import { Box } from "grommet";

export const Content = ({ children }) => (
  <Box
    pad="medium"
    style={{
      maxWidth: "800px",
      width: "100%",
      height: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}
  >
    {children}
  </Box>
);

export default Content;
