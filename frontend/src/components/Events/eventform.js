import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
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
			.post('http://localhost:5000/add', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,theme,startdate,enddate,contact,fees } = this.state
		return (
          
			<div className="yp_form">
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="event name"
							value={name}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
						<label>Event Theme</label>
						<input
							type="text"
							name="theme"
							placeholder="event theme"
							value={theme}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
						<label>Event Registration Start Date</label>
						<input
							type="date"
							name="date"
							placeholder="start date"
							value={startdate}
							onChange={this.changeHandler}
							required
						/>
					</div>
                    <div>
						<label>Event Registration End Date</label>
						<input
							type="date"
							name="date"
							placeholder="end date"
							value={enddate}
							onChange={this.changeHandler}
							required
						/>
					</div>
					<div>
						<label>Contact:</label>
						<input
							type="tel"
							name="contact"
							placeholder="Phone number"
							value={contact}
							onChange={this.changeHandler}
							required
						/>
					</div>
                    <div>
                       <label>Event Details:</label> <br/>
                       <textarea>
                           event details
                     </textarea>
                    </div>
                    <div>
						<label>Event Fee:</label>
						<input
							type="text"
							name="fee"
							placeholder="fees"
							value={fees}
							onChange={this.changeHandler}
							required
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


