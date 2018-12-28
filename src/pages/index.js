import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import SocialFeed from '../components/SocialFeed'
import { Header, Wrapper } from '../styled'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`event`, `live`, `portal`]} />
    <Header>Rose Hack 2019</Header>
    <Wrapper className="showMobile">
      <p>
        Need access to Wi-Fi? Head over to the{' '}
        <Link to="/wifi">request page</Link>.
      </p>
    </Wrapper>
    <Countdown />
    <SocialFeed />
  </Layout>
)

export default IndexPage
