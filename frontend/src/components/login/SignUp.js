import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',
			email:'',
			password:'',
			branch:'',
			phno:'',
			joinyear:''			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/add_user', this.state)
			//.then(res=>res.text())
			.then(res=>{
				if (res.data == 200){
				   console.log("User added");
				   alert(`Registered Successfully !!!!`);
				   localStorage.setItem('name', this.state.email);
				   this.props.history.push('/')
				}
				else{
				   console.log("User couldn't be added");
				   alert(`${this.state.name}  Registeration Unsuccessful !!!!`);
				} 
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,email,password,branch,phno,joinyear } = this.state
		return (
        
			<div className="yp_form">
					<h1 className="heading">Sign Up</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
						<label>Email:</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={this.changeHandler}
							required
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
							required
						/>
					</div>
					<div>
						<label>Contact:</label>
						<input
							type="tel"
							name="phno"
							placeholder="Phone number"
							value={phno}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
					<label>Branch:</label>
						<input
							type="text"
							name="branch"
							placeholder="Branch"
							value={branch}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
						<label>Joinyear:</label>
						<input
							type="date"
							name="joinyear"
							placeholder="Join"
							value={joinyear}
							onChange={this.changeHandler}
							required
						/>
					</div>

					<button class="submit-button" type="submit">Submit</button>
				</form>
				<div> To Login - 
				<NavLink to="/login" className="yp_navbar2"> Login</NavLink>
				</div>
			</div>
			
		)
	}
}


export default SignUp
