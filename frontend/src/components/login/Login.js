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
// e is a representative varible of this.state
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })//json object key value pair
	}

	submitHandler = e => {
		alert(`${this.state.email}  Login Successfully !!!!`)
		e.preventDefault()
		console.log(this.state)
		axios // used for post requests also works similar to promises
			.post('http://localhost:5000/data', this.state) //data is the function name written for login in backend also this line helps to pass the data to backend server from frontend server
			.then(response => { //this line helps use to rececive response from backend 
				var user_obj=response.data; //user_obj is the response rececived from the backend
				console.log(user_obj);
			})
			.catch(error => {
				console.log(error)// if u find some error catch gets exceuted
			})
	}


	render() {
    const { email,password } = this.state//declaration
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
  
  
