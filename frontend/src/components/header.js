import React from 'react';
import { NavLink } from 'react-router-dom';

var username = JSON.parse(localStorage.getItem('userdata'));
console.log(username);


export default class Header extends React.Component{
    handleSideBar = (e) =>{
        let x = document.getElementById("yp_nav");
        if(x.className === "yp_navbar"){
            x.className += " yp_navbar2";
        }else{
            x.className = "yp_navbar";
        }
    };   

    render() {
        return(
            <header className="yp_navbar" id="yp_nav" onScroll={this.handleScroll}>
                <div className="yp_bar" onClick={this.handleSideBar}>
                    <div className="yp_bar1"></div>
                    <div className="yp_bar2"></div>
                    <div className="yp_bar3"></div>
                </div>
                <NavLink to="/" activeClassName="is-active" exact={true} className="yp_navbar"><img src="https://2.bp.blogspot.com/-beUrUOb3btQ/T1PFJcGPDWI/AAAAAAAAAEM/hBCu0lFtbC8/s400/YES%2521%252B.png"/></NavLink>
                {username != null && <NavLink to="/logout" activeClassName="is-active" className="yp_navbar1">Logout</NavLink> }
                {username == null && <NavLink to="/login" activeClassName="is-active" className="yp_navbar1">Login</NavLink> }
                <NavLink to="/testimonials" activeClassName="is-active" className="yp_navbar1">Testimonials</NavLink>
                <NavLink to="/events" activeClassName="is-active" className="yp_navbar1">Events</NavLink>
                <NavLink to="/memory" activeClassName="is-active" className="yp_navbar1">Memories</NavLink>
                {username == null && <NavLink to="/signup" activeClassName="is-active" className="yp_navbar1">Join Us</NavLink> }
                <NavLink to="/about" activeClassName="is-active" className="yp_navbar1">About Us</NavLink>
            
            </header>
        )
    }
}
