import React from 'react';
import Testimonial from './Testimonials/testimonial';
import Testimonialform from './Testimonials/testimonialform';
import Social2 from './Testimonials/social2';

var username = JSON.parse(localStorage.getItem('userdata'));

const Testimonials = () =>(
    <div>
        <Testimonial />
        <Social2 />
    
    </div>
)

export default Testimonials;