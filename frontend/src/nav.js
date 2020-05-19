import React from 'react';
export default class App extends React.Component{
    render() {
        return (
          
              <div>
            <nav className="navbar sticky-top" >
            <div className=" container-fluid" id="navbar" >
            <div>
            
            
          
            <a href="#.html">
            <img onClick={this.handleKeyPress} 
   src="https://2.bp.blogspot.com/-beUrUOb3btQ/T1PFJcGPDWI/AAAAAAAAAEM/hBCu0lFtbC8/s400/YES%2521%252B.png"
   alt="HTML5" 
   style={{width: 140, height: 80, position: 'relative', top: this.props.top, left: this.props.left}}/>
  </a>
            </div>



           <div className="yp_navbar">
                <div className="yp_icon-bar" onclick="Show()">
                   <i></i>
                 <i></i>
                 <i></i>
               </div>
              <ul id="nav-lists">
                 <li className="close"><span onclick="Hide()">X</span></li>
                 <li><a href="#">About Us</a></li>
                   <li><a href="#">Join Us</a></li>
                   <li><a href="#">Login</a></li>
                   <li><a href="#">Sign Up</a></li>
                 <li><a href="#">Testimonials</a></li>

              </ul>
            </div>
            </div>
            </nav>
        </div>

        









        )
    }
}