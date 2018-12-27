import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import ActionIcons from '../components/ActionIcons'
import SocialFeed from '../components/SocialFeed'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`event`, `live`, `portal`]} />

    <Countdown />
    {/* <ActionIcons /> */}
    <SocialFeed />
  </Layout>
)

export default IndexPage
