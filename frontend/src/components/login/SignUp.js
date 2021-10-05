import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

function SignUp() {
	const history=useHistory()
  // constructor(props) {
  // 	super(props)

  // 	this.state = {
  // 		name:'',
  // 		email:'',
  // 		password:'',
  // 		branch:'',
  // 		phno:'',
  // 		joinyear:''
  // 	}
  // }
  const [detail, setdetail] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    phno: "",
    joinyear: "",
  });

  const changeHandler = (e) => {
    setdetail({...detail, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    axios
      .post("http://localhost:5000/add_user", detail)
    //   .then(res=>res.text())
      .then((res) => {
        if (res.data.status === 200) {
          console.log("User added");
          history.push("/");
        } else {
          console.log("User couldn't be added");
            alert(`Registeration Unsuccessful!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // render() {
  //   const { name, email, password, branch, phno, joinyear } =;
  return (
    <div className="yp_form">
      <h1 className="heading">Sign Up</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value={name}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            // value={email}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={password}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="tel"
            name="phno"
            placeholder="Phone number"
            // value={phno}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            // value={branch}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>
        <div>
          <label>Joinyear:</label>
          <input
            type="date"
            name="joinyear"
            placeholder="Join"
            // value={joinyear}
            onChange={(e) => {
              changeHandler(e);
            }}
            required
          />
        </div>

        <button class="submit-button" type="submit">
          Submit
        </button>
      </form>
      <div>
        {" "}
        To Login -
        <NavLink to="/login" className="yp_navbar2">
          {" "}
          Login
        </NavLink>
      </div>
    </div>
  );
  // }
}

export default SignUp;
