import React, { Component } from 'react';

import FooterFace from './FooterPictures/FooterFace.png'
import FooterBlog from './FooterPictures/FooterBlog.jpg'
import FooterInsta from './FooterPictures/FooterInsta.jpg'


class Footer extends Component {


    render() {
        return (
            
         <div className="Footer">
           <div className="FooterNavi">
          <p className="AdressBig">NAVIGATION</p> 
          <ul className="FooterUl">
            <a href="/"><li>HEM</li></a>
            <a href="/"> <li>VÄLKOMMEN</li></a>
            <a href="/"> <li>VÅR PERSONAL</li></a>
            <a href="/"> <li>OM OSS</li></a>
            <a href="/"> <li>PRISLISTA</li></a>
            <a href="/"> <li>KONTAKTA OSS</li></a>
          </ul>
          </div> 

          <div className="FooterMedia">
          <p className="AdressBig">SOCIALA MEDIA</p>
          <div className="FooterImageDown">
          <a href="https://www.facebook.com/FLOWVAASA/"><img className="FaceFooter" src={FooterFace} alt="FaceFooter"></img></a>
          <a href="https://www.instagram.com/salonflowvaasa/"> <img className="FaceFooter" src={FooterInsta} alt="FaceInsta"></img></a>
          <a href="http://flowvaasa.blogspot.com/"> <img className="FaceFooter" src={FooterBlog} alt="FaceBlog"></img></a>
          </div>
          


          </div>
          <div className="Adress">
            <p className="AdressBig">ADRESS</p> <br></br>
            <p>Rewell center 139 <br></br>
            65100 VASA
            </p>

          </div>
          <div className="TaKontakt">
            <p className="AdressBig">TA KONTAKT</p> <br></br>
            <p> e: info.@flowvasa.fi <br></br>
                n: 06 312 0750</p>
          

          </div>

             
         </div>
        );
      }
    }
    export default Footer;