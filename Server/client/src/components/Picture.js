import React, { Component } from 'react';

import Background from './background/background.jpg'
import Online from './HeaderPictures/online.png'
import Social from './HeaderPictures/sociala.png'


class Picture extends Component {


    render() {
        return (
            <div id="MEGA">
           <img className="wide" src={Background} alt="background"/>
           <div className="flow">
            <p className="megatext">F &nbsp; L  &nbsp; O  &nbsp; W</p>
            <p className="minitext"><span className="Quote"></span>Hair <span className="one">Make up</span><span className="one">Shop</span></p>
            </div>
            <div>
                <a href="https://slotti.fi/booking/Flow/"><img className="buttonImg" src={Online} alt="online"/></a>
                <a href="hej"><img className="buttonMoreImg" src={Social} alt="online"/></a>
            </div>


            
           
            </div>
            ); 
    }
    
}
    export default Picture;