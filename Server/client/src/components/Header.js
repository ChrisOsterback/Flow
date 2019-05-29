import React, { Component } from 'react';

import Home from './HeaderPictures/hem.png'
import Welcome from './HeaderPictures/vkommen.png'
import Staff from './HeaderPictures/personal.png'
import About from './HeaderPictures/omoss.png'
import Products from './HeaderPictures/produkter.png'
import PriceList from './HeaderPictures/prislista.png'
import Contact from './HeaderPictures/kontakta.png'
import English from './HeaderPictures/english.png'
import Finnish from './HeaderPictures/suomeksi.png'
import Flow from './HeaderPictures/flow.png'










class Header extends Component {


    render() {
        return (
            
          <nav >
              
            <div id="ScrollTop" >
            
    
            <ul className="center hide-on-med-and-down">
            <li className="tinyone"><a href="#MEGA" ><img src={Home} alt="Hem"/>   </a></li>
            <li className="tinytwo"><a href="#center" ><img src={Welcome} alt="Välkommen"/>    </a></li>
            <li className="tinythree"><a href="#Staff" ><img src={Staff} alt="Personal"/>  </a></li>
            <li className="tinyfour"><a href="#GoFlow" ><img src={About} alt="Om Oss"/>   </a></li>
            <li className="tinyfive"><a href="#Products" ><img src={Products} alt="Produkter"/>  </a></li>           
            <li className="tinysix"><a href="#Prices" ><img src={PriceList} alt="PrisLista"/>   </a></li>
            <li className="tinyseven"><a href="#Contact" ><img src={Contact} alt="Kontaka Oss"/>   </a></li>
            <li className="Languages"><a href="/" ><img src={English} alt="English"/> </a></li>
            <li className="tinyeight"><a href="/" ><img src={Finnish} alt="Finnish"/>  </a></li>
            <li className="FlowRight"><a href="/" ><img src={Flow} alt="Flow"/> </a></li>
            </ul>
          
            
            
            
            
     
       
            
             
          
    
            </div>
          </nav>
        );
      }
    }
    export default Header;