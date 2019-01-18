import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import animationData from './animation.json'

const HeroContainer = styled.section`
  background: linear-gradient(90deg, #574565, #27346a);
  background-repeat: no-repeat;
  width: 100%;

  div {
    display: flex;

    svg {
      transform: translate3d(0px, 6px, 0px) !important;
    }
  }
`

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  return (
    <HeroContainer>
      <Lottie options={defaultOptions} />
    </HeroContainer>
  )
}

export default Hero
