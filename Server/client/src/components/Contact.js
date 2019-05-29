import React, { Component } from 'react';

import ContactUs from './background/ContactUs.jpg' 




class Contact extends Component {


    render() {
        return (
            <div className="ContactUs" id="Contact">
           <img src={ContactUs} alt="contactus"/>
           <p className="ContactUsHeader">KONTAKTA OSS</p>
           <br></br>
           <p className="ContactUsPara">Vi finns i 
           <span className="ContactUsSpan"> REWELL CENTERS </span> 
           första våning, i centrum av 
           <br></br>
           <span  className="ContactUsSpan">VASA </span>
           <br></br><span className="ContactUsSpanBig">06 312 0750</span>
           </p>

           
        <div id="Social"></div>
            </div >
            ); 
    }
    
}
    export default Contact;