import React, { Component } from 'react';




class Welcome extends Component {


    render() {
        return (
            
         <div className="center">
           <p className="FirstPara">VÄLKOMMEN TILL</p>
           <p className="FontB">FLOW</p>
           <p className="NoM">REWELL CENTER 139</p>
           <p>Vi finns i VASA, i Rewell Centers första våning, med fönster mot Rådhusgatan och Stadshuset.
             <br></br>För tidsreservationer ring:  </p>
             <p className="Number">06 312 0750</p>
             <p className="FontMB">Öppet tider</p>
             <p className="FontMB" >Må-Fr <span className="SpaceOne"> 10-18 </span> <br></br>
             Lö <span className="SpaceTwo">  10-15 </span></p>
             
             <p className="Pbottom">(eller enligt överrenskommelse)</p>
             
         </div>
        );
      }
    }
    export default Welcome;