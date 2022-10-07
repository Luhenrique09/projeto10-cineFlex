import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Filmes({ filmes }) {
    return (
        <Link to={`/sessoes/${filmes.id}`}>
            <CaixaFilme>
                <img src={filmes.posterURL} />
            </CaixaFilme>
        </Link>
    )
}

export default Filmes

const CaixaFilme = styled.div`
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
border: 30px;
img{
    width: 129px;
}
` 