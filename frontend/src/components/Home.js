import React from 'react';
import Welcome from './home/welcome';
import Explain from './home/explain';
import Benefit from './home/benefit';
import Images from './home/images';
import Activity from './home/activity';

const Home = () =>(
    <div>
        <Welcome />
        <Explain />
        <Benefit />
        <Images />
        <Activity />
    </div>
)

export default Home;
