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
                <div className="heading"><h1> explain </h1>
                </div>
                <div classname="jumbotron jumbotron-fluid">
                <div className="yp_explain">
                    <div className="yp_fade1">
                    <div className="slide-title"> What’s new?? </div>
                    
                    <div className="slide-text"> For what??
                        The environment created during this course is so comfortable
                        but succeeds in getting you out of your comfort zone. You get to 
                        have the wonderful experience of Sudharshan Kriya. Along with 
                        this there are a lot of activities awaiting you.
                        This course teaches you a lot of new things which you don't want to miss at all.
                         It is you the best environment, makes you comfortable enough to speak to anyone, 
                         helps to understand yourself better and make sure you learn the most.
                            Here you learn to come out of your comfort zone and be better at communication. 
                        Most of us have a problem with the talking to new people or fear new 
                        changes in our surrounding and never accept the fact of change or be happy.
                        This can be over come by a little help provided by Yes+ course with a little exercise,
                         sudarshan kriya and many more activities.
                             More activities doesn't mean that you have to spend a lot of time to try
                      and understand things which you can do with the tiniest of things.
                    The only requirement for the course your interest and enthusiasm towards it. 
                    There many new things for you to explore in it so hurry up and be a part of us and the best of yourself.    
                  </div>
                
                </div>
                    <div className="yp_fade2"><img src="/images/s1.jpeg"  /></div>
                </div>

                <div className="yp_explain">
                    <div className="yp_fade1">
                    <div className="slide-title">for what?? </div>
                           
                             <div className="slide-text"> For what??
                                Do it for yourself, for your betterment, for your peace of mind
                                and give yourself a chance to enjoy all the activities we have
                                awaiting you. Enjoy while you learn something new and
                                benefit yourself with this course.
                                Everyone deserve to be the best of themselves.
                                 everyone must enjoy and the same time learn something new, get better at what they are 
                                 and be happy with a really pisses me.
                                    You should do this course to give a chance for yourself to learn, to love,
                               get new skills and enjoy which most of us miss out in our busy schedules.
                                Do this for yourself because you deserve the best of experiences you can have. 
                                Learn to explore yourself and your ability which was stopped without your knowledge.
                                 Give the chance to yourself because you are what you want to be and try out be the most calm, patient, de-stressed, confident and happiest you have ever been.

                                   </div>
                    </div>
                    <div className="yp_fade2"><img src="/images/s7.jpeg" /></div>
                </div>


                <div className="yp_explain">
                    <div className="yp_fade1"> <div className="slide-title"> when???</div>
                          <div>
                              <ul>date :</ul>
                             <ul>time :</ul>
                             <ul>faculty :</ul>
                             <ul>contact:</ul>
                          </div>
                        </div>
                    <div className="yp_fade2"><img src="/images/img30.jpg" /></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1">hello4</div>
                    <div className="yp_fade2"><img src="/images/img31.jpg" /></div>
                </div>
            </div>
            </div>
        );
    };
};
