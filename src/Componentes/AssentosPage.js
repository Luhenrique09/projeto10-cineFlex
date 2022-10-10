import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Assentos from './Assentos';
import RegComprador from './RegComprador';
import { Link } from 'react-router-dom';
function AssentosPage({setComprador, setcpfComprador, setAssentosEscolhidos}) {

    const { IDassentos } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${IDassentos}/seats`

    const [filme, setFilme] = useState([]);
    const [assentos, setAssentos] = useState([])
    const [reservados, setReservados] = useState([])
    const [IDreservados, setIDreservados] = useState([])
    const [nome, setNome] = useState('')
    const [cpf, setcpf] = useState('');


    useEffect(() => {
        const promise = axios.get(URL)

        promise.then((res) => {
            setAssentos(res.data.seats)
            setFilme(res.data.movie)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, []);
    
    function enviar(){
       setAssentosEscolhidos(reservados)
        setComprador(nome)
        setcpfComprador(cpf)
        
        const URLPost = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'
        const body = {
            ids: IDreservados,
            name: nome,
            cpf: cpf
        }

        const promise = axios.post(URLPost, body)

        promise.then(() => { 
            
        })

        promise.catch((error) => {
            alert(error.response.data)
        })
    }
    
    return (
        <Div>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <AssentosDis>
                {assentos.map((a) => <Assentos key={a.id} reservados={reservados} setReservados={setReservados} IDreservados={IDreservados} setIDreservados={setIDreservados} a={a} />)}
            </AssentosDis>
            <Intro>
                <Sele><div></div>Selecionado</Sele>
                <Disp><div></div>Disponível</Disp>
                <Indisp><div></div>Indisponivel</Indisp>
            </Intro>

            <RegComprador  setcpfComprador={setcpfComprador} setComprador={setComprador} nome={nome} setNome={setNome} cpf={cpf} setcpf={setcpf}/>

            <Link to={`/sucesso`}>
                    <button onClick={enviar} type='submit'>Reservar assentos(s)</button>
                </Link>

            <Inferior>
                <div><img src={filme.posterURL} /></div>
                <h3>{filme.title}</h3>
            </Inferior>

        </Div>
    )

}

export default AssentosPage

const Div = styled.div`
      margin-bottom: 117px;
      margin-top:70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button{
        margin-top:57px;
        width: 225px;
        height: 42px;
        background-color: #e8833a;
        border-radius: 3px;
        color: #ffffff;
        border:none;
    }
      
`

const Title = styled.div`
color: #293845;
  width: 100%;
  height: 80px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AssentosDis = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 0 24px;
`

const Intro = styled.div`
    width: 351px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`

const Sele = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#4E5A65;
    font-size: 13px;
    div{
    width: 26px;
    height: 26px;
    background-color: #1AAE9E;
    border: 1px solid #808f9d;
    border-radius: 12px;
    }
     
`

const Disp = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    color:#4E5A65;
    font-size: 13px;
    div{
    width: 26px;
    height: 26px;
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    }
`

const Indisp = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    color:#4E5A65;
    font-size: 13px;
    div{
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #808f9d;
    border-radius: 12px;
    }
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