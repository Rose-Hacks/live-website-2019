import React, { Component } from 'react'

import { Wrapper } from '../styled'
import Sponsors from '../globals/sponsors'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../components/Hero/animation.json'
import Carousel from 'nuka-carousel'

const BASE_IMAGE_URL =
  'https://res.cloudinary.com/rosehack/image/upload/q_auto,f_auto,dpr_auto'

class SponsorsPage extends Component {
  render() {
    return (
      <PageContainer>
        <Hero />
        <SponsorsWrapper>
          <Carousel
            autoplay={true}
            autoplayInterval={1000}
            cellSpacing={100}
            disableKeyboardControls={true}
            slidesToShow={7}
            withoutControls={true}
            wrapAround={true}
            slideWidth="200px"
            cellAlign={'center'}
            vertical
            heightMode="max"
          >
            {Sponsors.map(s => (
              <img
                src={`${BASE_IMAGE_URL}/${s.public_id}`}
                alt=""
                style={{ order: s.order }}
                className={s.class}
                key={s.public_id}
              />
            ))}
          </Carousel>
        </SponsorsWrapper>
      </PageContainer>
    )
  }
}

export default SponsorsPage

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`
const SponsorsWrapper = styled(Wrapper)`
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  width: 35vw;
  overflow-y: scroll;
  height: 100vh;

  .slider-frame {
    height: 100vh !important;
  }
`

const HeroContainer = styled.section`
  background: linear-gradient(190deg, #574565, #27346a);
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  div {
    display: flex;

    svg {
      transform: translate3d(0px, 6px, 0px) !important;
      width: 50%;
      position: absolute;
      bottom: -200px;
    }
  }

  svg {
    /* width: 50% !important; */
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
