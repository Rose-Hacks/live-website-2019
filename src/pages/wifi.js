import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Header, Wrapper, Input, Emphasis } from '../styled'
import Wifi from '../components/Wifi'

const WifiPage = () => (
  <Layout>
    <SEO title="Wifi" keywords={[`event`, `live`, `portal`, `wifi`]} />
    <Header>Wi-Fi Request</Header>
    <Wifi />
  </Layout>
)

export default WifiPage
