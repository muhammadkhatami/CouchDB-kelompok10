import React from "react";

import Content from "../../components/Content";
import Quiz from "../Quiz";

export const Home = ({ db }) => (
  <Content>
    <Quiz db={db} />
  </Content>
);

export default Home;
