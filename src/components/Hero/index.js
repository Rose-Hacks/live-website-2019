import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.section`
  background: linear-gradient(100deg, #574565, #27346a);
  background-repeat: no-repeat;
  height: 70vh;
  width: 100%;
`

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Hero</h1>
    </HeroContainer>
  )
}

export default Hero
