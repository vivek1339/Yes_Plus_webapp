import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

var username = JSON.parse(localStorage.getItem('userdata'));

export default class Eventpage extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        data: []

      };
    }
    
    componentWillMount(){
      axios
        .get('http://localhost:5000/display_event')
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

         //  return <div key={index}>
          //    <p>Event Name - { el.event_name }</p>
          //    <p>Theme - { el.event_theme }</p>
         //     <p>Start date - { el.event_startdate}</p>
         //     <p>End date - { el.event_startdate}</p>
         //     <p>Details Content - { el.event_phno}</p>
         //   </div>
        

        return     <div className="helloo" key={index}>
        <div className="blog-post">
         <div className="blog-post_info">
        
          <div className="blod-post_date"><p>Start date - { el.event_startdate}</p></div>
          <h1 class="blog-post_title"><p>Event Name - { el.event_name }</p></h1>
           <p class="blog-post_text">  
                 <p>Theme - { el.event_theme }</p>  
                 <p>Details Content - { el.event_phno}</p>
                 <p>End date - { el.event_startdate}</p>
            </p>
      </div>
      </div>
      </div>
      });    
      
        return(
            <div>
                <div className="yp_event">{ child }</div>

                <div className="yp_event">
                {username != null && username.type!=0 && <NavLink to="/eventform" className="yp_navbar4"><button className="yp_event-button"> Form</button> </NavLink>}
                </div>


            </div>
            
        );
    }
}