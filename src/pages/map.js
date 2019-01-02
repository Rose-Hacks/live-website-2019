import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'

import Key from '../images/key.png'

const SchedulePage = () => (
  <Layout>
    <SEO title="Map" keywords={[`map`, 'events', 'workshops']} />
    <Header>Map</Header>
    <Wrapper>
      <img src={Key} alt="" />
    </Wrapper>
  </Layout>
)

export default SchedulePage
