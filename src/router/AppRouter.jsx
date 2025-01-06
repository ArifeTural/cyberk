import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Dijital from '../pages/Digital'
import Drm from '../pages/Drm'
import MobilUygulama from '../pages/MobilUygulama'
import Uiux from '../pages/Uiux'
import WebTasarim from '../pages/WebTasarim'
import WebYazilim from '../pages/WebYazilim'
import YapayZeka from '../pages/Ai'

import Teklif from '../pages/Teklif'
import Eticaret from '../pages/Eticaret'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DijitalDonusum' element={<Digital />} />
        <Route path='/Drm' element={<Drm />} />
        <Route path='/MobilUygulama' element={<MobilUygulama />} />
        <Route path='/Ui&Ux' element={<Uiux />} />
        <Route path='/WebTasarim' element={<WebTasarim />} />
        <Route path='/WebYazilim' element={<WebYazilim />} />
        <Route path='/YapayZeka' element={<Ai />} />
        <Route path='/Eticaret' element={<Eticaret />} />
        <Route path='/Teklif' element={<Teklif />} />
        <Route path='*' element={<Home />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default AppRouter
