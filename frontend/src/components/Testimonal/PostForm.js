import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
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
			.post('http://localhost:5000/add', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,email,password,branch,phno,joinyear } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="tel"
							name="phno"
							placeholder="Phone number"
							value={phno}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="branch"
							placeholder="Branch"
							value={branch}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="number"
							name="joinyear"
							placeholder="Join"
							value={joinyear}
							onChange={this.changeHandler}
						/>
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}


export default PostForm
