import React from 'react';

export default class Explain extends React.Component{
    interval = null;

    componentDidMount(){
        let slideIdex = 0;
        const showslides = () => {
            let images = document.getElementsByClassName("yp_fade1");
            let imagess = document.getElementsByClassName("yp_fade2");
             
            let i = 0;
            for( i; i < images.length; i++){
                images[i].style.display = 'none';
                imagess[i].style.display = 'none';
            }
            slideIdex++;
            if (slideIdex > images.length){slideIdex = 1}
            images[slideIdex - 1].style.display = 'block';
            imagess[slideIdex - 1].style.display = 'block';
        }
        showslides();
        this.interval = setInterval(() => showslides() , 3000);
    };

    componentWillUnmount(){
        clearInterval(this.interval);
    };
    
    render(){
        return(
            <div>
                <div className="yp_heading"><h1> Know us more </h1></div>
                  <div className="jumbotron jumbotron-fluid">
                    <div className="yp_explain">
                      <div className="yp_fade1">
                        <div className="yp_slide-title"> Why Yes+? </div>
                           <div className="yp_slide-text"> 
                              <p>There is a quote “When you get out of comfort zone it expands and follows you!”, 
                                 the YES!+ workshop gives you a first-hand experience of this.This workshop is 
                                 packed with a lot of fun and simple activities which makes you wonder about the 
                                 mind and its abilities, to engage you and make you feel special.We make sure that
                                 you experience a lot of new things which you wouldn't want to miss at all.This workshop 
                                 offers a very comfortable environment that makes you see us as a family! As you practice 
                                 the tasks we assign in this workshop, you will gain confidence as well as public speaking 
                                 skills gradually. This workshop is specially designed for you, the only requirement for 
                                 the course your interest and enthusiasm towards it.There are many new things for you to 
                                 experience, so hurry up and be a part of us and explore the best in yourself.
                             </p> 
                           </div>
                       </div>
                            <div className="yp_fade2"><img src="/images/e1.jpeg" alt="img" /></div>
                    </div>

                <div className="yp_explain">
                    <div className="yp_fade1">
                      <div className="yp_slide-title">Discover New You! </div>
                           <div className="yp_slide-text"> 
                               <p>This workshop has a lot of elements which will assist you, to let go of your previous 
                                  self and enter a new dimension. The transition is going to be amazing. Trust us!This is 
                                  a personality development workshop. These days as we all know, Soft skills are much more 
                                  important than Tech skills. This workshop is conducted in different parts of the world as 
                                  well as in most of the top universities ( Like Havard, IITs and lot of NITs) which has their 
                                  own YES!+ clubs.We are here to help you discover and uncover the skills from within yourselves
                                  one after the other. This workshop focuses on leadership, creativity, enthusiasm and responsibility. 
                                  manages to de-stress and enable the release of negative emotions. We target and talk about the stress 
                                  of studies, career, love and relationships with parents through various interactive sessions and activities.
                                   So, come join us and be a part of this journey to find you!
                                </p>
                            </div>
                        </div>
                    <div className="yp_fade2"><img src="/images/e2.jpeg" alt="img"/></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1"> <div className="yp_slide-title"> When???</div>
                          <div>
                              <ul>date :</ul>
                             <ul>time :</ul>
                             <ul>faculty :</ul>
                             <ul>contact:</ul>
                          </div>
                        </div>
                    <div className="yp_fade2"><img src="/images/e3.jpeg" alt="img"/></div>
                </div>
            </div>
    </div>
        );
    };
};
