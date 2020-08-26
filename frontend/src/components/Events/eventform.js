import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

var username = localStorage.getItem('email');

class Eventform extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',
			eventtheme:'',
			startdate:'',
			enddate:'',
			phno:'',
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		alert(`${this.state.name}  Registered Successfully !!!!`)
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/add_event', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,email,password,branch,contact,joinyear } = this.state
		return (
          
			<div className="form">
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="event name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>event theme</label>
						<input
							type="text"
							name="theme"
							placeholder="event theme"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>event registration start date</label>
						<input
							type="date"
							name="date"
							placeholder="start date"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<label>event registration end date</label>
						<input
							type="date"
							name="date"
							placeholder="end date"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>contact:</label>
						<input
							type="tel"
							name="contact"
							placeholder="Phone number"
							value={contact}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
                       <label>event details:</label> <br/>
                       <textarea>
                           event details
                     </textarea>
                    </div>
                    <div>
						<label>event fee:</label>
						<input
							type="text"
							name="fee"
							placeholder="fees"
							value={contact}
							onChange={this.changeHandler}
						/>
					</div>
				

					<button type="submit">Submit</button>
				</form>
				<div> to login
				<NavLink to="/login" >login</NavLink>
				</div>
			</div>
		)
	}
}


export default Eventform;



