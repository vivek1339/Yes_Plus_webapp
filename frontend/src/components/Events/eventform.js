import React, { Component } from 'react'
import axios from 'axios'

class Eventform extends Component {
	constructor(props) {
		super(props)

		this.state = {

			//name:'',
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
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/add_event', this.state)
			.then(response => {
				console.log(response);
				alert(`Added Successfully !!!!`)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { eventtheme,startdate,phno,enddate } = this.state

		return (
          
			<div className="yp_form">
				<form onSubmit={this.submitHandler}>
					{/* <div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="event name"
							value={name}
							onChange={this.changeHandler}
							required
						/>
					</div> */}
					 <div>
						<label>Event Theme</label>
						<input
							type="text"
							name="eventtheme"
							placeholder="eventtheme"
							value={eventtheme}
							onChange={this.changeHandler}
							required
						/>
					</div> 
					<div>
						<label>Event Registration Start Date</label>
						<input
							type="date"
							name="startdate"
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
							name="enddate"
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
							name="phno"
							placeholder="Phone number"
							value={phno}
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
                    {/* <div>
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
				 */}

					<button type="submit">Submit</button>
				</form>
				
			</div>
		)
	}
}


export default Eventform;


