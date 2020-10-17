import React from 'react';
const Teacher = () =>{
        return (
            <div className="yp_container-fluid">
              <div className="yp_faculty">
               <h1>Our Faculty</h1>
                 <div className="yp_start1">

                     <figure className="yp_snip blue">
                       <img src="/images/Ajay.jpeg" alt=""/>
                        <figcaption>
                          <h3>Ajay Kumar</h3>
                            <p>  Customer Succes Manager at Zscaler (World Leader in Cloud Security). </p>
                        </figcaption>
                          <a href=""></a>
                     </figure>

                     <figure className="yp_snip red ">
                       <img src="/images/Ananth.jpeg" alt=""/>
                        <figcaption>
                           <h3>Anant Bhandarkar</h3>
                            <p> Executive Director at Impact Analytics </p>
                         </figcaption>
                            <a href=""></a>
                     </figure>

                     <figure className="yp_snip blue">
                         <img src="/images/Deepti.jpeg" alt=""/>
                          <figcaption>
                            <h3>Deepti</h3>
                              <p> Works in Amazon</p>
                          </figcaption>
                              <a href=""></a>
                    </figure> 

                    <figure className="yp_snip red">
                      {/*  <img src="/images/hemanth.jpeg" alt=""/> */}
                            <figcaption>
                              <h3>Hemanth</h3>
                                <p></p>
                            </figcaption>
                                <a href=""></a>
                    </figure>

                     <figure className="yp_snip blue">
                       {/* <img src="/images/Priyanka.jpg" alt=""/> */}
                         <figcaption>
                            <h3>Dr. Priyanka Agarwal</h3>
                              <p> Senior Software Developer at CISCO </p>
                         </figcaption>
                               <a href=""></a>
                     </figure>

                    <figure className="yp_snip red">
                        <img src="/images/Sahana.jpeg" alt=""/>
                          <figcaption>
                            <h3>Sahana sathish</h3>
                              <p> Supply Chain Consultant at Infor  </p>
                          </figcaption>
                              <a href=""></a>
                     </figure>

                    <figure className="yp_snip blue">
                          <img src="/images/Sai sankalp.jpeg" alt=""/>
                            <figcaption>
                              <h3>Sai Sankalp</h3>
                                <p> Senior Software Developer at CISCO </p>
                            </figcaption>
                              <a href=""></a>
                    </figure>

                     <figure className="yp_snip red">
                        <img src="/images/Seema.jpeg" alt=""/>
                          <figcaption>
                            <h3>Seema Kalro</h3>
                                <p> Senior Associate at Price Waterhouse Coopers (PwC) </p>
                          </figcaption>
                               <a href=""></a>
                     </figure>

                </div>
            </div>
        </div>
        );
    };
    export default Teacher;

