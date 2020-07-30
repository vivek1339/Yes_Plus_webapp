import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () =>(
    <div>
        <div>
        This is login page
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/Comment" className="yp_navbar2">comment</NavLink>
        </div>

        <form className="login" >
			<h1 className="heading">Login</h1>
					<div >
						<label>User id:</label>
						<input
							type="text" 
							name="User id"
							placeholder="User id"
						
						/>
					</div>
				
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							
						/>
					</div>
					
				

					<button class="submit-button" type="submit">Submit</button>
					<div> to Signup
				<NavLink to="/signup" className="yp_navbar2">signup</NavLink>
				
				</div>
				</form>
    </div>
    
)

export default Login;