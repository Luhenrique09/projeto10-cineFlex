import styled from 'styled-components';

function Sessoes({sessoes}){
    return (
       
            <Conteudo>
                <h2>{sessoes.weekday} - {sessoes.date}</h2>
                <Horario>
                    <div>{sessoes.showtimes[0].name}</div>
                    <div>{sessoes.showtimes[1].name}</div>
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
        font-family: Roboto;
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
    font-family: Roboto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    }
`