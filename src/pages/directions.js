import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'

const DirectionsPage = () => (
  <Layout>
    <SEO title="Directions" keywords={['directions']} />
    <Header>Directions</Header>
    <Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1654.3433261956245!2d-117.3247276417373!3d33.97489256946682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x80dcae57568f45c1%3A0xb084f4a53659397d!2sParking+Lot+13%2C+Riverside%2C+CA!3m2!1d33.9746199!2d-117.3214232!4m3!3m2!1d33.975504!2d-117.326042!5e0!3m2!1sen!2sus!4v1547332394467"
        width="100%"
        height="600px"
        frameborder="0"
        allowfullscreen
      />
    </Wrapper>
  </Layout>
)

export default DirectionsPage
