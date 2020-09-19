import React from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

var username = JSON.parse(localStorage.getItem('userdata'));


export default class Testimonialpage extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        data: []

      };
    }
    
    componentWillMount(){
      axios
        .get('http://localhost:5000/display_testimonial')
        .then(( response )=> {
            console.log(response);

            this.setState({  
                data: response.data,   
          });
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    render(){
      
   
        
      const child = this.state.data.map((el, index) => {
            if(el==undefined)
                return

           // return   <div className="helloo" key={index}>
              
          //    <p>name - { el.user_name }</p>
          //    <p>experience - { el.user_experience }</p>
          //    <p>joinyear - { el.user_join_year}</p>
          //    <p>faculty - { el.user_faculty}</p>
          //    <p>batchno - { el.user_batchno}</p>
          //   <p>branch-{el.user_branch}</p>
          //     </div>
           
          
            return <div className="helloo" key={index}>
              <div className="blog-post">
               <div className="blog-post_info">
              
                <div className="blod-post_date"><p>joinyear - { el.user_join_year}</p></div>
                <h1 class="blog-post_title"><p>name - { el.user_name }</p></h1>
                <p class="blog-post_text"> <p>branch-{el.user_branch}</p>
                      <p>batchno - { el.user_batchno}</p>
                      <p>experience - { el.user_experience }</p>
                  </p>
            </div>
            </div>
            </div>
                
     
        });    
        return(
            <div>
                <div className="yp_event">{ child } </div>
                 <div class="yp_testimonial">
                { username !=null && <NavLink to="/testimonialform" className="yp_navbar4"> <button class="yp_testimonial-button"> Testimonial Form</button> </NavLink> }
		        </div>
          </div>

         
    );
    }
}


