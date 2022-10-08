
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'

import Filmes from './Filmes'


function FilmePage() {
    const URLFilmes = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promise = axios.get(URLFilmes)

        promise.then((res) => {
            console.log(res.data)
            setFilmes(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, []);


    return (
        <div>
            <Title>
                Selecione o filme
            </Title>
            <ConteudoFilmes>
                {filmes.map((f) => <Filmes key={f.id} filmes={f} />)}
            </ConteudoFilmes>
        </div>
    )
}
export default FilmePage

const Title = styled.div`
  width: 100%;
  height: 110px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ConteudoFilmes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`

