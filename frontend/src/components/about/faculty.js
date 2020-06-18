import React from 'react';

const Faculty = () => {
    return(
        <div id="wrap">
            <h1><center>Faculty Co-Ordinators</center></h1>
            <div id="showcase">
                <img src="/images/11.jpg" alt="AB" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="CD" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="EF" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="G" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="H" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="I" className="cloud9-item"/>
                <img src="/images/11.jpg" alt="J" className="cloud9-item"/>
            </div>
            <p id="item-title">&nbsp;</p>
            <div className="nav noselect">
                <button className="left" ><i className="fa fa-arrow-left"></i></button>
                <button className="right"><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Faculty