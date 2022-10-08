import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useState } from "react";

function RegComprador (){
    const { IDassentos } = useParams();
    const [nome, setNome] = useState();
    const [cpf, setcpf] = useState();
    console.log(nome)
    console.log(cpf)
    return(
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

                <button  type='submit'>Reservar assentos(s)</button>
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
