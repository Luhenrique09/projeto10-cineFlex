import { useState } from "react";
import styled from "styled-components";

function Assentos({ assentos, a }) {
    /* console.log(a.id) */
    const disponivel = '#c3cfd9'
    const selecionado = '#1AAE9E' 
    const indisponivel = '#FBE192'
    const [cor, setCor] = useState(disponivel)
    const [reservado, setReservado] = useState(false)
    function selecionando(a){
        setReservado(!reservado)
        if (a.isAvailable===true) {
            setCor(selecionado)
            console.log(a.name)
        }
        else alert('Esse assento não está disponível')
        
        if (reservado) setCor(disponivel)
    }

    function verifica(){
    if(a.isAvailable===true){
        return cor
    }else  {
      
     return indisponivel
    }
   
    }

    return (
        <Div  onClick={() => selecionando(a)} cor={verifica()}>
            <div >{assentos}</div>
        </Div>
    )
}

export default Assentos

const Div= styled.div`
        width: 26px;
        height: 26px;
        background-color: ${props => props.cor};
        border: 1px solid #808f9d;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:11px;
        letter-spacing: 0.04em;
        margin: 0 4px 18px 0;
`
