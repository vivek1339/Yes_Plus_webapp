import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

var username = JSON.parse(localStorage.getItem('userdata'));

class Testimonialform extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',		
			branch:'',
            joinyear:''	,
            batchno:'',
            experience:'',
            faculty:'',
          //	img:'',

		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
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
		const { name,branch,batchno,joinyear,experience,faculty } = this.state
		return (
			<div className="yp_form">
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
				<div> To Login -
				<NavLink to="/login" > Login</NavLink>
				
				</div>
				
			</div>
		)
	}
}


export default Testimonialform



