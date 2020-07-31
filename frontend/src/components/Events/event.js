import React from 'react';
import { NavLink } from 'react-router-dom';

const Event = () =>(
    <div>
        <div>
       Testimonal page
        <NavLink to="/formadmin"></NavLink>
        <NavLink to="/Comment" className="yp_navbar4"></NavLink>
        </div>


        <div class="yp_event">
        <NavLink to="/formadmin" className="yp_navbar4"><button class="yp_event-button"> Form</button> </NavLink>
		</div>


    </div>
)

export default Event;