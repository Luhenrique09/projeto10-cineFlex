import React, { useState } from 'react';
import styled from 'styled-components';
import FilmePage from './FilmePage';
import GlobalStyle from "./GlobalStyle";
import SegundaPage from './SecundaPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssentosPage from './AssentosPage';
import Sucesso from './SucessoPage';

function App() {
  const [comprador, setComprador] = useState()
  const [cpfComprador, setcpfComprador] = useState()
  const [filmeEscolhido, setFilmeEscolhido] = useState()
  const [assentosEscolhidos, setAssentosEscolhidos] = useState()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Top>
        CINEFLEX
      </Top>
      <Routes>
        <Route path='/' element={<FilmePage />} />
        <Route path='/sessoes/:IDfilme' element={<SegundaPage setFilmeEscolhido={setFilmeEscolhido} />} />
        <Route path='/assentos/:IDassentos' element={<AssentosPage setAssentosEscolhidos={setAssentosEscolhidos} setcpfComprador={setcpfComprador} setComprador={setComprador}/>}/>
        <Route path='/sucesso' element={<Sucesso assentosEscolhidos={assentosEscolhidos} comprador={comprador} cpfComprador={cpfComprador} filmeEscolhido={filmeEscolhido}/>} />
      </Routes>
      
     

    </BrowserRouter>
  )
}
export default App;


const Top = styled.div`
position: fixed;
top:0;
  background-color: #C3CFD9;
  width: 100%;
  height: 67px;
  color: #E8833A;
  font-size: 34px;
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
`


