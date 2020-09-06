import React , {Component} from 'react';


var username = JSON.parse(localStorage.getItem('userdata'));


export default class Log extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
        };
    }
    render(){

        return(
            <div>

                {localStorage.clear()}

                { this.props.history.push('/') } 

            </div>
        )
    }
}
