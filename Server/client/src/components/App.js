import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Picture from './Picture'
import Welcome from './Welcome'
import Staff from './Staff'
import Withflow from './Withflow'
import ProductPriceList from './ProductsPriceList'
import Contact from './Contact'
import Maps from './Maps'
import Footer from './Footer'
class App extends Component {


render() {
    return (
        <div >
        <BrowserRouter>
        <div>

        <Header />
        <Picture />
        <Welcome />
        <Staff />
        <Withflow />
        <ProductPriceList />
        <Contact />
        <Maps />
        <Footer/>
        </div>
        </BrowserRouter>
        </div>
    );
  }
}


export default  App;