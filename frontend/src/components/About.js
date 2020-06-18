import React from 'react';
import Ordinator from './about/ordinator';
import Founder from './about/founder';
import Faculty from './about/faculty';
import Subordinator from './about/subordinator';
const About = () =>{
    return(
        <div>
            <Ordinator />
            <Subordinator />
            <Faculty />
            <Founder />
        </div>
    );
};

export default About;