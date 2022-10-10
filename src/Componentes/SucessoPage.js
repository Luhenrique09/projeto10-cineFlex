import styled from "styled-components"
import { Link } from "react-router-dom";
function Sucesso({filmeEscolhido, sessaoEscolhida, comprador, cpfComprador, assentosEscolhidos}) {

    return (
        <div>
            <Title>
                Pedido feito <br />com sucesso!
            </Title>
            <Div>
                <h1>Filme e sessão</h1>
                <h2>{filmeEscolhido}</h2>
                <h2>{sessaoEscolhida}</h2>

                <h1>Ingressos</h1>
                {assentosEscolhidos.map((a) => <h2>Assento {a}</h2>)}

                <h1>Comprador</h1>
                <h2>Nome: {comprador}</h2>
                <h2>CPF: {cpfComprador}</h2>

                <Link to={`/`}>
                    <button>Voltar pra Home</button>
                </Link>
            </Div>

        </div>
    )
}

export default Sucesso

const Title = styled.div`
text-align: center;
 margin-top:70px;
color: #293845;
  width: 100%;
  height: 80px;
  font-size: 24px;
  font-weight: 700;
  color: #247A6B;
  display: flex;
  line-height: 28px;
  justify-content: center;
  align-items: center;
`
const Div = styled.div`
display: flex;
flex-direction: column;
padding-left: 29px;
    h1{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 28px;
    color: #293845;
    }
    h2{
    font-size: 22px;
    color: #293845;
    }
    button{
    width: 225px;
    height: 42px;
    margin-top: 82px;
    background-color: #e8833a;
    border-radius: 3px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border: none;
    }   
`

