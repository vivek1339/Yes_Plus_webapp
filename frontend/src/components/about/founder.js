import React from 'react';
/*this feature should be constant throughtout the club exists*/
const Founder = () =>{
    return(
        <div className="yp_slidder_head2">
          <center><h1>Founders</h1> 
            <h4>(Student Chapter)</h4></center>
            <div className="container2">
                <div className="card2">
                    <div className="imgbx2">
                        <img src="/images/ihit.jpeg" height="243.8" width="260"/>
                    </div>
                    <div className="content2">
                        <h2>Ihit Shukla<br /><span>Mechanical Engineer</span></h2>
                        <p>I feel a new enthusiam for life.I feel strength within to reach new heights and achieve the impossible.</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="imgbx2">         
                        <img src="/images/vivek.jpeg" height="243.8" width="260"/>
                    </div>
                    <div className="content2">
                        <h2>Vivek<br /><span>Software Engineer</span></h2>
                        <p>I have been practicing the techniques taught in AOL since the AGE of 10. It's given me a lazer sharp clarity ,the strength to handle challenges and triggered.A SENSE OF INTUITION!!!</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="imgbx2">   
                        <img src="/images/satish.jpeg" height="243.8" width="260"/>
                    </div>
                    <div className="content2">
                        <h2>Satish<br /><span>Mechanical Engineer</span></h2>
                        <p>My CONFIDENCE has boosted and I overcame my stage fear, within 2 days I hosted an event at campus which I COULD NEVER DREAM OF!</p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Founder;