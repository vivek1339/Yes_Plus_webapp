import React from 'react';


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
