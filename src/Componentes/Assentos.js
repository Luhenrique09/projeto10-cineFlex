import { useState } from "react";
import styled from "styled-components";

function Assentos({a, reservados,setReservados, IDreservados, setIDreservados }) {
    
    const disponivel = '#c3cfd9'
    const selecionado = '#1AAE9E'
    const indisponivel = '#FBE192'
    const [cor, setCor] = useState(disponivel)
    const [ValorReservado, setValorReservado] = useState(false)
   

    function handleclick(a) {
        setValorReservado(!ValorReservado)

        if (a.isAvailable === true) {
            setCor(selecionado)
          
        }
        else alert('Esse assento não está disponível')

        if (ValorReservado) {
            setCor(disponivel)
            
        }
        else {
            setReservados([...reservados, a.name])
            setIDreservados([...IDreservados, a.id])
        }
    }
    

    function verifica() {
        if (a.isAvailable === true) {
            return cor
        } else {

            return indisponivel
        }

    }

    return (

        <Div cor={verifica}>
            <div onClick={() => handleclick(a)} >{a.name}</div>

        </Div>

    )
}



export default Assentos

const Div = styled.div`
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
