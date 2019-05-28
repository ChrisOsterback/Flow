import React, { Component } from 'react';

import ProductLine from './ProductPictures/ProductLine.png'
import Wella from './ProductPictures/Wella.jpg'
import ProSeb from './ProductPictures/ProSeb.jpg'
import Fudge from './ProductPictures/Fudge.jpg'
import GHD from './ProductPictures/GHD.jpg'
import Evo from './ProductPictures/Evo.jpg'
import PriceLine from './ProductPictures/ProductLine.png'
class ProductsPriceList extends Component {


    render() {
        return (
            
          <div className="ProductsPrice">
          <p className="ProductHeader">PRODUKTER</p>
          <img src={ProductLine} alt="Product" />

          <div className="ProductImgDown">
          <img src={Wella} alt="Wella" />
          <img className="ProductImgLeft" src={Fudge} alt="Fudge" />
          <img className="ProductImgLeft" src={ProSeb} alt="Proseb" />
          


          </div>
          <div className="ProductImgDownTwo">
          <img  src={GHD} alt="GHD" />
          <img className="ImgGigaLeft" src={Evo} alt="Evo" />
  
          </div>
             
             <p className="ProductPriceSecondHeader">PRISLISTA</p>
             <img src={PriceLine} alt="PriceLine" />
             <p ><span className="ProductFontSize">Klippning:</span> <span className="Klippning">32,50 - 65,50€</span> 
             <br></br> 
             <span className="ProductFontSize">Färg:</span>  <span className="KlippningOne">92,50 - 138 €</span> 
             <br></br>
             <span className="ProductFontSizeSpan">Ögonbrynsplockningar och färgning, ögonfransfärg</span>
             <span className="KlippningTwo">  13,50 - 27,00 € </span>
             <br></br>
             </p>
             <p className="PaketDown">
             <span className="ProductFontSizePaket">Paket</span>
             <br></br>
             <br></br>
             Klippning + färg (kort) <span className="SpanPaket">115,50 - 120,00€</span> 
             <br></br>
             Klippning + färg (halvlångt)  <span className="SpanPaketOne">123,50 - 130,00 €</span>
             <br></br>
             Klippning + färg (långt)   <span className="SpanPaket">135,00 - 145,50€</span> 
             <br></br> 
             Klippning + färg (extra långt) <span className="SpanPaketOne">145,50 - 162,50 €</span>
             <br></br>
             </p>
             <p className="UpWash">
              <span className="ProductFontSizeUpWash">Uppsättning</span>
              <br></br>
              <br></br>
            UppsättningTvätt + föning (45 min)   <span className="SpanUpWash">45,50€</span>
             <br></br>
             Festuppsättning      <span className="SpanUpWashOne">32,00 - 60,00 €</span>
             <br></br>
             Bruduppsättning (inkl. 15 min planering) <span className="SpanUpWashTwo">67,50 €/h </span> 
             </p>
             <p className="Makeup">
            <span className="ProductFontSizeMakeUp">Makeup</span>
             <br></br>  <br></br>
            Fest-, bröllops- och fotograferingsmakeup <span className="SpanMakeup">58,00 - 120,00 €</span>
            <br></br><br></br> <br></br>
            <span className="SpanMakeUpTwo">*Vid förhinder bör du avboka din tid senast 24h före den avtalade tidpunkten.
              <br></br> 
              Vi förbehåller oss rätten att fakturera 50% för de tjänster som avbokats på <br>
              </br>samma dag eller om de inte alls avbokats.</span>
              </p>
    
         </div>
        );
      }
    }
    export default ProductsPriceList;