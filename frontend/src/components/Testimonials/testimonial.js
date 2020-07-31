import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Testimonialpage = () =>(
    <div>
       <div>
       Testimonal page
        <NavLink to="/testimonialform"></NavLink>
        <NavLink to="/Comment" className="yp_navbar4"></NavLink>
        </div>


        <div class="yp_testimonial">
        <NavLink to="/testimonialform" className="yp_navbar4"> <button class="yp_testimonial-button"> Testimonial Form</button> </NavLink>
		</div>
         
</div>
)

export default Testimonialpage;