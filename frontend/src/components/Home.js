import React from 'react';
import Welcome from './home/welcome';
import Explain from './home/explain';
import Benefit from './home/benefit';
import Activity from './home/activity';
import PopUp from './home/popup';
import Social1 from './home/social1';

var username = localStorage.getItem('email');

const Home = () =>(
    <div>
        
        <Welcome />
        <Explain />
        <Benefit /> 
        <Activity />
        <PopUp />
        <Social1 />
        
    </div>
)

export default Home;