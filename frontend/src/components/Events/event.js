import React from 'react';
import { NavLink } from 'react-router-dom';

const Eventpage = () =>(
    <div>
        <div>
       Event page
        <NavLink to="/eventform"></NavLink>
        <NavLink to="/Comment" className="yp_navbar4"></NavLink>
        </div>


        <div class="yp_event">
        <NavLink to="/eventform" className="yp_navbar4"><button class="yp_event-button"> Form</button> </NavLink>
		</div>


    </div>
)

export default Eventpage;