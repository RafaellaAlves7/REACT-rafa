import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Curriculo from './components/Curriculo/Curriculo';
import Contato from './components/Contato/Contato';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {


  return (

    <>
      <Header></Header>

      <BrowserRouter>
        <nav>

          <div id="container">
            <div> <Link to="/">Currículo</Link></div>
            <div> <Link to="/Portfolio">Portfólio</Link></div>
            <div><Link to="/Contato">Contato</Link></div>


          </div>
        </nav>
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
