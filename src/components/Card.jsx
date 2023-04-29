import React from 'react'
import styled from 'styled-components'

export default function Card({movieData, isliked = false}) {
  return (
    <Container>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="movies" />
    </Container>
  )
}

const Container = styled.div``;
