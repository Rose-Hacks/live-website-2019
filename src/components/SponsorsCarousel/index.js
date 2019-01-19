import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import Sponsors from '../../globals/sponsors'

const Footer = styled.footer`
  /* background: #2a1d66; */
  background: #fff9;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 500;

  h1 {
    margin-bottom: 0;
  }
`

const Logo = styled.img`
  height: 30px;
  width: initial !important;
  margin: 0 auto;
`

const BASE_IMAGE_URL =
  'https://res.cloudinary.com/rosehack/image/upload/h_50,q_auto,f_auto,dpr_auto'

export default class SponsorCarousel extends Component {
  // componentDidMount = async () => {
  //   // const REQUEST_URL =
  //   //   'http://res.cloudinary.com/rosehack/image/list/rosehack2019.json'
  //   // const data = await fetch(REQUEST_URL)
  //   // const { resources } = await data.json()
  //   // console.log(resources)
  //   // this.setState({ sponsors: resources })
  // }

  render() {
    return (
      <Footer className="noMobile">
        <Carousel
          autoplay={true}
          autoplayInterval={1500}
          cellSpacing={30}
          initialSlideHeight={200}
          disableKeyboardControls={true}
          slidesToShow={20}
          withoutControls={true}
          wrapAround={true}
          slideWidth="200px"
          cellAlign={'center'}
          slideIndex={Math.floor(Sponsors.length / 2)}
        >
          {Sponsors.map(sponsor => {
            return (
              <Logo
                src={`${BASE_IMAGE_URL}/${sponsor.public_id}`}
                key={sponsor.public_id}
              />
            )
          })}
        </Carousel>
      </Footer>
    )
  }
}
