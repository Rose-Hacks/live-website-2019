import React from 'react'

import Layout from '../components/Layout/HomeLayout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import SocialFeed from '../components/SocialFeed'
import { Header, Wrapper } from '../styled'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`event`, `live`, `portal`]} />
    <Header>Rose Hack 2019</Header>
    <Wrapper style={{ marginBottom: `100px` }}>
      <p>
        👋 Hello! We'll have more info here on Saturday so make sure to return
        here then.
      </p>
    </Wrapper>
    {/* <Wrapper className="showMobile">
      <p>
        Need access to Wi-Fi? Head over to the{' '}
        <Link to="/wifi">request page</Link>.
      </p>
    </Wrapper> */}
    {/* <Countdown /> */}
    {/* <SocialFeed /> */}
  </Layout>
)

export default IndexPage
