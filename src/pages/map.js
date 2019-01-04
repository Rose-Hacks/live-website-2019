import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'

import Key from '../images/mapweb_key.svg'
import FloorOne from '../images/mapweb_floor one.svg'
import FloorTwo from '../images/mapweb_floor two.svg'

const SchedulePage = () => (
  <Layout>
    <SEO title="Map" keywords={[`map`, 'events', 'workshops']} />
    <Header>Map</Header>
    <Wrapper>
      <img
        src={Key}
        alt="key for map"
        style={{ display: `block`, margin: `0 auto`, maxWidth: `500px` }}
      />
    </Wrapper>

    <Wrapper>
      <img src={FloorOne} alt="map of floor 1" />
    </Wrapper>

    <Wrapper>
      <img src={FloorTwo} alt="map of floor 2" />
    </Wrapper>
  </Layout>
)

export default SchedulePage
