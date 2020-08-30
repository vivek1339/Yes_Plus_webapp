import React from 'react';
import Event from './Events/event';
import Eventform from './Events/eventform';
import Social2 from './Events/social2';

var username = JSON.parse(localStorage.getItem('userdata'));

const Events = () =>{

    return(
        <div>
             <Event />
             {/* {username.type} */}
             <Social2 />
        </div>
    );
};

export default Events;