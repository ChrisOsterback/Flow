import React, { Component } from 'react';

import { Spring } from 'react-spring/renderprops';

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

            <Spring
                from={{ opacity: 0, }}
                to={{ opacity: 1,   }}
                config={{ delay:1000, duration: 1000}}
                >
                { props => ( <div style={props}>

            <p className="minitext"><span className="Quote">
                </span>
                <i className="fas fa-circle"></i>Hair <span className="one">
                    <i className="fas fa-circle"></i>Make up</span>
                    <span className="one"><i className="fas fa-circle"></i>Shop</span></p>

                    </div>
                )}
                </Spring>

            </div>
            
            <div>
            <Spring
                from={{ opacity: 0, }}
                to={{ opacity: 1,   }}
                config={{ delay:1000, duration: 1000}}
                >
                { props => ( <div style={props}>

                <a href="https://slotti.fi/booking/Flow/"><img className="buttonImg" src={Online} alt="online"/></a>

                </div>
                )}
                </Spring>

                <Spring
                from={{ opacity: 0, }}
                to={{ opacity: 1, }}
                config={{ delay:2000, duration: 2000}}
                >
                { props => ( <div style={props}>

                <a href="#Social"><img className="buttonMoreImg" src={Social} alt="online"/></a>

                </div>
                )}
                </Spring>
                

                
            </div>     
            
            
           
            </div>
            ); 
    }
    
}
    export default Picture;