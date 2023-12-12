import React from 'react';

import {Footer, Blog, Possibility, WhatGBT3, Header, Features} from './containers';
import { CTA, Feature, Navbar} from './components';
import './App.css';
import Brand from './components/brand/Brand';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGBT3/>
        <Feature/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App