import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

var username = JSON.parse(localStorage.getItem('userdata'));

class Testimonialform extends Component {
	constructor(props) {
		super(props)

		this.state = {	
			email:'',	
            batchno:'',
            experience:'',
            faculty:'',
          //	img:'',

		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
		// this.setState({ [e.email]: username.email })
    }
    // fileUploadhandler=()=>{
    //     axios
	// 		.post('http://localhost:5000/add_testimonial', this.state)
	// 		.then(response => {
	// 			console.log(response)
	// 		})
    // }

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/add_testimonial', this.state)
			.then(response => {
				console.log(response);
				alert(`Added Successfully !!!!`)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,email,branch,batchno,joinyear,experience,faculty } = this.state
		this.state.email = username.email

		return (
			<div className="yp_form">
				<form onSubmit={this.submitHandler}>
                    <div>
						<label>Batch No:</label>
						<input
							type="text"
							name="batchno"
							placeholder="batchno"
							value={batchno}
							onChange={this.changeHandler}
							required
						/>
					</div>
                    <div>
						<label>Experience:</label>
						<input
							type="text"
							name="experience"
							placeholder="experience"
							value={experience}
							onChange={this.changeHandler}
							required
						/>
					</div>
                    <div>
						<label>Faculty:</label>
						<input
							type="text"
							name="faculty"
							placeholder="faculty"
							value={faculty}
							onChange={this.changeHandler}
							required
						/>
					</div>

                    {/* <div>
                        <label>Upload Img:</label><br/>
                        <input 
                        type="file" 
                        name="file"
                        placeholder="upload"
                        onChange={this.fileSelectedHandler}
						required/>
                        <button onClick={this.fileUploadhandler}>upload</button>
					
					</div> */}


					<button type="submit">Submit</button>
				</form>				
			</div>
		)
	}
}


export default Testimonialform



