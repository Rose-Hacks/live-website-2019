import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import SocialFeed from '../components/SocialFeed'
import { Header } from '../styled'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`event`, `live`, `portal`]} />
    <Header>Rose Hack 2019</Header>
    <Countdown />
    <SocialFeed />
  </Layout>
)

export default IndexPage
