import React from 'react';
import { NavLink } from 'react-router-dom';

function User(props){

   return (
       <ul>
            <li>{props.name}</li>
       </ul>
   )
}

var obj = [
    {
        name: "pooh",
        class: "Five"
    },
    {
        name: "ammu",
        class: "Five"
    },
    {
        name: "appi",
        class: "Five"
    }
]


const Eventpage = () =>(
    <div>
        <div>
       Event page
        <NavLink to="/eventform"></NavLink>
        <NavLink to="/Comment" className="yp_navbar4"></NavLink>
        </div>
        <ul>
         {obj.map((user)=><User key={user.id} name={user.name}/>)}
      </ul>

        <div class="yp_event">
        <NavLink to="/eventform" className="yp_navbar4"><button class="yp_event-button"> Form</button> </NavLink>
		</div>


    </div>
)

export default Eventpage;