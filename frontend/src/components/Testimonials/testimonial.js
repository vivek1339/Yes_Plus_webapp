import React from 'react';
import { NavLink } from 'react-router-dom';

var username = JSON.parse(localStorage.getItem('userdata'));

const Testimonialpage = () =>(
    <div>
       <div>
       Testimonal page
        <NavLink to="/testimonialform"></NavLink>
        <NavLink to="/Comment" className="yp_navbar4"></NavLink>
        </div>


        <div class="yp_testimonial">
        { username !=null && <NavLink to="/testimonialform" className="yp_navbar4"> <button class="yp_testimonial-button"> Testimonial Form</button> </NavLink> }
		</div>
         
</div>
)

export default Testimonialpage;