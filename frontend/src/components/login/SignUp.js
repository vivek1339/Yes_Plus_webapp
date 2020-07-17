import React, { Component } from 'react'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
            phone:"",
            email:"",
            address:"",
            branch:"",



        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    branchhandler = (event) => {
        this.setState({
            branch: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email:"",
            phone:"",
            password: '',
            gender:"" ,
            branch:"",
            address:"",
        })
        
     event.preventDefault()
        
    }
   



    render() {
        return (
            <div>
             <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h2> Registration form</h2>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>email:</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="email" /><br />
                    <label>phone:</label> <input type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="phone" /><br />
         
                   <label>gender:</label><select onChange={this.genderhandler} defaultValue="select gender">
                       <option defaultValue>select gender</option>
                       <option value="male">male</option>
                       <option Value ="female">female</option>
                       
                   </select><br/>



                    <label>branch:</label> <select onChange={this.branchhandler} defaultValue="Select branch">
                        <option defaultValue>Select branch</option>
                        <option value="ece">ece</option>
                        <option value="cs">cs</option>
                        <option value="eee">eee</option>
                        <option value="it">it</option>
                        <option value="mech">mech</option>
                        <option value="civil">civil</option>
                    </select><br />
                    <label>address:</label><textarea value={this.state.address} onChange={this.addresshandler} placeholder="address" ></textarea><br/>

                    <input type="submit" value="Submit" />
                </form>
</div>
            </div>
            
        )
    }
}

export default Form