import styled from "styled-components"
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";

function RegComprador({nome, setNome, cpf, setcpf}) {
    const { IDassentos } = useParams();
    
    return (
        <div>

            <Form action={`/assentos/${IDassentos}`}>

                <label for='nome'>Nome do comprador:</label>
                <input
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    id="nome"
                    placeholder="Digite seu nome..."
                    name='nome' type='text'
                    required></input>

                <label for='cpf'>CPF do comprador:</label>
                <input
                    value={cpf}
                    onChange={e => setcpf(e.target.value)}
                    id="cpf"
                    placeholder="Digite seu CPF..."
                    name='cpf' type='text'
                    required></input>

            </Form>


        </div>
    )
}
export default RegComprador

const Form = styled.div`
    display: flex;
    flex-direction: column;
    
    span{
        font-size: 18px;
        color: #293845;
        
    }
    input{
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
   
`
