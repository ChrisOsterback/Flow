import React, { Component } from 'react';

import Facebook from './StaffPictures/Facebook.jpg'
import Insta from './StaffPictures/Insta.jpg'
import Blog from './StaffPictures/Blog.jpg'


class Maps extends Component {


    render() {
        return (
            
         <div className="Maps" >
           <div className="MapsMoveLeft">
           <div >
            <a href="https://www.facebook.com/FLOWVAASA/"><img src={Facebook} alt="Facebook" /></a>
            <a href="https://www.instagram.com/salonflowvaasa/">  <img className="MapsSocialSpread" src={Insta} alt="Insta" /></a> 
            <a href="http://flowvaasa.blogspot.com/"><img className="MapsSocialSpread" src={Blog} alt="Blog" /></a> 
            </div>

            <p className="MapsDown">
            <span className="MapNumber">06 312 0750</span> 
            <br></br>
            <span className="MapInfo">info@flowvasa.fi</span>
            </p>
            </div>


            <div className="GoogleMaps">
            <div className="mapouter"><div className="gmap_canvas">
              <iframe title="Map" width="600" height="500" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Flow%2C%20Raastuvankatu%2019%2C%2065100%20Vaasa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> 
              </div> </div>
              

            </div>




         </div>
        );
      }
    }
    export default Maps;