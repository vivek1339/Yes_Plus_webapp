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
                <div className="yp_explain">
                    <div className="yp_fade1">hello</div>
                    <div className="yp_fade2"><img src="/images/carousel_1.png" /></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1">hello2</div>
                    <div className="yp_fade2"><img src="/images/carousel_1.png" /></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1">Hello3</div>
                    <div className="yp_fade2"><img src="/images/carousel_1.png" /></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1">hello4</div>
                    <div className="yp_fade2"><img src="/images/carousel_1.png" /></div>
                </div>
                <div className="yp_explain">
                    <div className="yp_fade1">hello5</div>
                    <div className="yp_fade2"><img src="/images/carousel_1.png" /></div>
                </div>
            </div>
        );
    };
};
