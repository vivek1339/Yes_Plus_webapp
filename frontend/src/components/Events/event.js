import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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

            return <div key={index}>
              <p>Title - { el.event_title }</p>
              <p>Date - { el.event_date }</p>
              <p>Description - { el.event_description }</p>
            </div>
        });
      
        return(
            <div>
                <div className="yp_event">{ child }</div>

                <div className="yp_event">
                <NavLink to="/eventform" className="yp_navbar4"><button className="yp_event-button"> Form</button> </NavLink>
                </div>


            </div>
            
        );
    }
}