import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Countdown />
  </Layout>
)

export default IndexPage
