import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Sessoes from './Sessoes';


function SelecionarHorario() {

    const {IDfilme} = useParams();
    const URLFilme = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${IDfilme}/showtimes`
    
    const [filme, setFilme] = useState([]);
    const [sessoes, setSessoes] = useState([])
   

    useEffect(() => { 
        const promise = axios.get(URLFilme) 

        promise.then((res) => {
            setSessoes(res.data.days)
            setFilme(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })        
    }, []); 
    
    return (
        <Div>

            <Title>
                Selecione o horário
            </Title>
           
            {sessoes.map((s) =><Sessoes key={s.id} sessoes={s}/>)}
             
            <Inferior>
                <div><img src={filme.posterURL} /></div>
                <h3>{filme.title}</h3>

            </Inferior>
        </Div>
    )
}

export default SelecionarHorario

const Div = styled.div`
      padding-bottom: 117px;
      padding-top:70px;
`

const Title = styled.div`
  width: 100%;
  height: 110px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Inferior = styled.div`
    width: 100%;
    height: 117px;
    background-color: #dfe6ed;
    border: 1px solid #9eadba;
    position: fixed;
    bottom: 0;
    display: flex;
    padding-left:23px;
    align-items: center;
    div{
        width: 64px;
        height: 89px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 48px;
        }
    }
    h3{
        font-size: 26px;
        color: #293845;
        padding-left: 14px;
    }
`

