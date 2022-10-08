import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Sessoes({ sessoes }) {
    return (

        <Conteudo>
            <h2>{sessoes.weekday} - {sessoes.date}</h2>

            <Horario>
                <Link to={`/assentos/${sessoes.showtimes[0].id}`}>
                    <div>{sessoes.showtimes[0].name}</div>
                </Link>
                <Link to={`/assentos/${sessoes.showtimes[1].id}`}>
                    <div>{sessoes.showtimes[1].name}</div>
                </Link>
            </Horario>

        </Conteudo>
    )
}
export default Sessoes

const Conteudo = styled.div`
    padding-left: 23px;
  
    h2{
        font-size: 20px;
        border: 50px;
        color:#293845;
    }
`

const Horario = styled.div`
    width: 175px ;
    display: flex;
    justify-content: space-between;
    padding: 22px 0 22px 0;

div{
    background-color: #e8833a;
    width: 83px;
    height: 43px;
    border-radius: 3px;
    color: #ffffff;
    font-size: 18px;    
    display: flex;
    justify-content: center;
    align-items: center;
    
    }
`