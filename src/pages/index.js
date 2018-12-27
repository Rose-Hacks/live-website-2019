import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import SocialFeed from '../components/SocialFeed'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`event`, `live`, `portal`]} />

    <Countdown />
    <SocialFeed />
  </Layout>
)

export default IndexPage
