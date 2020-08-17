import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";


export default class log extends Component {
 
	constructor(props) {
		super(props)

		this.state = {
			
			email:'',
			password:''
		
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		alert(`${this.state.email}  Login Successfully !!!!`)
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/data', this.state)
			.then(response => {
				var user_obj=response.data;
				console.log(user_obj);
			})
			.catch(error => {
				console.log(error)
			})
	}


	render() {
    const { email,password } = this.state
		return (
    <div>
        <div>
        
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/Comment" className="yp_navbar2"></NavLink>
        </div>
<div className="form">
     			<form onSubmit={this.submitHandler}>
			<h1 className="heading">Login</h1>
					<div >
						<label>User id:</label>
						<input
								type="email"
								name="email"
								placeholder="Email"
								value={email}
								onChange={this.changeHandler}
						/>
					</div>
				
					<div>
						<label>Password:</label>
						<input
									type="password"
									name="password"
									placeholder="Password"
									value={password}
									onChange={this.changeHandler}
						/>
					</div>
					
				

				<button className="submit-button" type="submit">Submit</button>
				<div> to Signup
				<NavLink to="/signup" className="yp_navbar2">signup</NavLink>
				
			</div>
		</form>
    </div>
	</div>
			
      )
    }
  }
  
  