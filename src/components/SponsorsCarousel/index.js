import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

const Footer = styled.footer`
  background: #276fbf;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;

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
  state = {
    sponsors: [
      {
        public_id: 'rosehack-2019-sponsors/sketch',
        version: 1545893338,
        format: 'png',
        width: 1940,
        height: 728,
        type: 'upload',
        created_at: '2018-12-27T06:48:58Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/devlifts',
        version: 1545893338,
        format: 'png',
        width: 450,
        height: 268,
        type: 'upload',
        created_at: '2018-12-27T06:48:58Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/esri',
        version: 1545893337,
        format: 'png',
        width: 800,
        height: 327,
        type: 'upload',
        created_at: '2018-12-27T06:48:57Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/gcp',
        version: 1545893337,
        format: 'png',
        width: 800,
        height: 452,
        type: 'upload',
        created_at: '2018-12-27T06:48:57Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/github',
        version: 1545893336,
        format: 'png',
        width: 800,
        height: 209,
        type: 'upload',
        created_at: '2018-12-27T06:48:56Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/leveluptutorials',
        version: 1545893336,
        format: 'png',
        width: 268,
        height: 271,
        type: 'upload',
        created_at: '2018-12-27T06:48:56Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/linode',
        version: 1545893336,
        format: 'png',
        width: 2049,
        height: 810,
        type: 'upload',
        created_at: '2018-12-27T06:48:56Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/mlab',
        version: 1545893335,
        format: 'png',
        width: 480,
        height: 240,
        type: 'upload',
        created_at: '2018-12-27T06:48:55Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/postman',
        version: 1545893335,
        format: 'png',
        width: 1452,
        height: 537,
        type: 'upload',
        created_at: '2018-12-27T06:48:55Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/stickergiant',
        version: 1545893334,
        format: 'png',
        width: 291,
        height: 181,
        type: 'upload',
        created_at: '2018-12-27T06:48:54Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/typeform',
        version: 1545893333,
        format: 'png',
        width: 1280,
        height: 824,
        type: 'upload',
        created_at: '2018-12-27T06:48:53Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/ucr',
        version: 1545893333,
        format: 'png',
        width: 992,
        height: 191,
        type: 'upload',
        created_at: '2018-12-27T06:48:53Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/wesbos',
        version: 1545893332,
        format: 'png',
        width: 282,
        height: 310,
        type: 'upload',
        created_at: '2018-12-27T06:48:52Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/wolfram',
        version: 1545893332,
        format: 'png',
        width: 500,
        height: 200,
        type: 'upload',
        created_at: '2018-12-27T06:48:52Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/xyz',
        version: 1545893332,
        format: 'png',
        width: 500,
        height: 306,
        type: 'upload',
        created_at: '2018-12-27T06:48:52Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/codepen',
        version: 1545893331,
        format: 'png',
        width: 1380,
        height: 260,
        type: 'upload',
        created_at: '2018-12-27T06:48:51Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/vueschool',
        version: 1545893331,
        format: 'png',
        width: 141,
        height: 30,
        type: 'upload',
        created_at: '2018-12-27T06:48:51Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/framer',
        version: 1545893330,
        format: 'png',
        width: 512,
        height: 512,
        type: 'upload',
        created_at: '2018-12-27T06:48:50Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/digitalocean',
        version: 1545893330,
        format: 'png',
        width: 354,
        height: 354,
        type: 'upload',
        created_at: '2018-12-27T06:48:50Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/snapchat',
        version: 1545893330,
        format: 'png',
        width: 480,
        height: 480,
        type: 'upload',
        created_at: '2018-12-27T06:48:50Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/L3',
        version: 1545893329,
        format: 'png',
        width: 1280,
        height: 800,
        type: 'upload',
        created_at: '2018-12-27T06:48:49Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/stickermule',
        version: 1545893334,
        format: 'png',
        width: 706,
        height: 409,
        type: 'upload',
        created_at: '2018-12-27T06:48:48Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/google',
        version: 1545893329,
        format: 'png',
        width: 440,
        height: 149,
        type: 'upload',
        created_at: '2018-12-27T06:48:49Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/autodesk',
        version: 1545893328,
        format: 'png',
        width: 2000,
        height: 334,
        type: 'upload',
        created_at: '2018-12-27T06:48:48Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/swe',
        version: 1545893328,
        format: 'png',
        width: 1361,
        height: 569,
        type: 'upload',
        created_at: '2018-12-27T06:48:48Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/macys-tech',
        version: 1545893328,
        format: 'png',
        width: 1756,
        height: 319,
        type: 'upload',
        created_at: '2018-12-27T06:48:48Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/balsamiq',
        version: 1545893327,
        format: 'png',
        width: 450,
        height: 200,
        type: 'upload',
        created_at: '2018-12-27T06:48:47Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/botanic-gardens',
        version: 1545893327,
        format: 'jpg',
        width: 854,
        height: 1024,
        type: 'upload',
        created_at: '2018-12-27T06:48:47Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/aspb',
        version: 1545893327,
        format: 'png',
        width: 400,
        height: 400,
        type: 'upload',
        created_at: '2018-12-27T06:48:47Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/arcade',
        version: 1545893327,
        format: 'png',
        width: 953,
        height: 249,
        type: 'upload',
        created_at: '2018-12-27T06:48:47Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/rxbar',
        version: 1545893327,
        format: 'png',
        width: 628,
        height: 258,
        type: 'upload',
        created_at: '2018-12-27T06:48:47Z',
      },
      {
        public_id: 'rosehack-2019-sponsors/mongoDB',
        version: 1545893326,
        format: 'png',
        width: 1796,
        height: 512,
        type: 'upload',
        created_at: '2018-12-27T06:48:46Z',
      },
    ],
  }

  componentDidMount = async () => {
    // const REQUEST_URL =
    //   'http://res.cloudinary.com/rosehack/image/list/rosehack2019.json'
    // const data = await fetch(REQUEST_URL)
    // const { resources } = await data.json()
    // console.log(resources)
    // this.setState({ sponsors: resources })
  }

  render() {
    const { sponsors } = this.state

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
          slideIndex={Math.floor(sponsors.length / 2)}
        >
          {sponsors.map(sponsor => {
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
