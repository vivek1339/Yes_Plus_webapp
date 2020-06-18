import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () =>(
    <div>
        This is login page
        <NavLink to="/signup">Sign Up</NavLink>
    </div>
)

export default Login;