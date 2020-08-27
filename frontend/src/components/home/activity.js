import React from 'react';

const Activity = () => {
  return(
    <div className="container-fluid">
      <div className="yp_activity">
        <h1>Our Activities</h1>
        <div className="yp_container">
          <div className="yp_card">
            <div className="yp_imgbx" data-text="river rejuvination">
              <img src="./images/a1.jpeg"  alt=""/>
            </div>
            <div className="yp_content">
              <div>
                <h2>River rejuvination</h2>
                <p>One day we all went thinking of doing something which we have never done before. 
                  We went there early, we spread manure all the plants there.We had few new people in 
                  our teem but the teamwork was at its peak. We made two lines and passed the manure 
                  so that the work was done faster and more  efficiently.After all this the best part was
                  when we were on our way back in the train and having breakfast with lots of fun.
                </p>
              </div>
            </div>
          </div>
          <div className="yp_card">
            <div className="yp_imgbx" data-text="swatch bit">
              <img src="./images/a2.jpeg" alt=""/>
            </div>
            <div className="yp_content">
              <div>
                <h2>Swatch bit</h2>
                <p>Many people love their surroundings to be clean but only a few would come up to do the cleaning. 
                 On that day they were more people who together as a team worked for a single cause which was to 
                  have the college cleaned. Everyone joined the hands and gave their best. All equally tried their 
                  best and showed that we can work together as a team and always do the best work.                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
        
export default Activity;
