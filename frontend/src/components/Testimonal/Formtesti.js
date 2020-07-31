import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
class Formtesti extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',		
			branch:'',
            joinyear:''	,
            batchno:'',
            experience:'',
            faculty:'',
          img:'',

		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    fileUploadhandler=()=>{
        axios
			.post('http://localhost:5000/add', this.state)
			.then(response => {
				console.log(response)
			})
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
		const { name,branch,batchno,joinyear,experience,faculty,pic } = this.state
		return (
			<div className="form">
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
				
					<div>
					<label>branch:</label>
						<input
							type="text"
							name="branch"
							placeholder="Branch"
							value={branch}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>joinyear:</label>
						<input
							type="date"
							name="joinyear"
							placeholder="Join"
							value={joinyear}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<label>batchno:</label>
						<input
							type="text"
							name="batchno"
							placeholder="batchno"
							value={batchno}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<label>experience:</label>
						<input
							type="text"
							name="experience"
							placeholder="experience"
							value={experience}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<label>faculty:</label>
						<input
							type="text"
							name="faculty"
							placeholder="faculty"
							value={faculty}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
                        <label>upload img:</label><br/>
                        <input 
                        type="file" 
                        name="file"
                        placeholder="upload"
                        onChange={this.fileSelectedHandler}/>
                        <button onClick={this.fileUploadhandler}>upload</button>
					
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


export default Formtesti



