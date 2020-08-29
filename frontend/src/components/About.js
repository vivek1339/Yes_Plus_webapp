import React from 'react';
import Ordinator from './about/ordinator';
import Founder from './about/founder';
import Faculty from './about/faculty';
import Subordinator from './about/subordinator';
import Social1 from './about/social1';

var username = localStorage.getItem('user');

const About = () =>{
    return(
        <div>
            
            <Ordinator />
            <Subordinator />
            <Faculty />
            <Founder />
            <Social1 />
        </div>
    );
};

export default About;