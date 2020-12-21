import React from 'react';

import Content from '../Content';
import Quiz from '../Quiz';

export const Home = ({ db }) => (
    <Content>
        <Quiz db={db} />
    </Content>
);

export default Home;