import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Curriculo from './components/Curriculo/Curriculo';
import Contato from './components/Contato/Contato';
import Portfolio from './components/Portfolio/Portfolio';
import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (

    <>
      <Header></Header>

      <BrowserRouter>
     <BarraNavegacao></BarraNavegacao>
        <Routes>

          <Route index element={<Curriculo />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        

        </Routes>
      </BrowserRouter>

      <Footer></Footer>





    </>
  )
};

export default App
