import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import ActionIcons from '../components/ActionIcons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Countdown />
    <ActionIcons />
  </Layout>
)

export default IndexPage
