import React, { Component } from 'react';

import Line from './StaffPictures/Line.png'
import Ani from './StaffPictures/Ani.jpg'
import Hilda from './StaffPictures/Hilda.jpg'
import Jennika from './StaffPictures/Jennika.jpg'
import Julia from './StaffPictures/Julia.jpg'
import Ott from './StaffPictures/Ott.jpg'
import Insta from './StaffPictures/Insta.jpg'
import Facebook from './StaffPictures/Facebook.jpg'
import Blog from './StaffPictures/Blog.jpg'

class Staff extends Component {


    render() {
        return (
            
         <div className="centerStaff">
          <p>VÅR PERSONAL</p>
          <img src={Line} alt="Line" />
          <div className="StaffPic">
    <div className="StaffPictures"> <img src={Ani} alt="Ani" />  <img className="HM" src={Hilda} alt="Hilda" />
            <p className="Pmove"><span className="Amove">ANI</span>  
            <span className="Hmove">HILDA</span></p>
            <br></br>
            <p className="PmoveSecond"><span className="Bluemove">ÄGARE, FRISÖR OCH MAKEUP-ARTIST</span>  
            <span className="BluemoveSecond">FRISÖR </span></p>
            </div>

            <div className="StaffPicturesOne">  <img src={Jennika} alt="Jennika" /> 
            <img className="HM" src={Julia} alt="Julia" /></div>
              <p className="PmoveSecondDiv"><span className="AmoveSecondDiv">JENNIKA</span>   
            <span className="HmoveSecondDiv">JULIA</span></p>
            <br></br>
        <p className="PmoveSecondDivP"><span className="BluemoveDiv">FRISÖR </span>  
            <span className="BluemoveSecondDiv">FRISÖR </span></p>

              <div className="StaffPicturesTwo">  <img src={Ott} alt="Ott" /> </div>
              <p className="PmoveThirdDiv"><span className="AmoveThirdDiv">OTT V</span></p>
              <p className="PmoveThirdDivP"><span className="BluemoveThirdDiv">FRISÖR </span></p>
            </div>
            <div className="SocialMediaSmallButtons"><a href="https://www.instagram.com/salonflowvaasa/"><img src={Insta} alt="Instagram"></img></a>
            <a href="https://www.facebook.com/FLOWVAASA/"> <img className="IconLeft" src={Facebook} alt="Facebook"></img></a>
            <a href="http://flowvaasa.blogspot.com/"><img className="IconLeft" src={Blog} alt="Blog"></img></a></div>
         </div>
        );
      }
    }
    export default Staff;