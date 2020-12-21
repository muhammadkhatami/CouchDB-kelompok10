import React from "react";
import { Box } from "grommet";

export const Content = ({ children }) => (
  <Box
    pad="medium"
    style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
  >
    {children}
  </Box>
);

export default Content;
