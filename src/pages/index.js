import React from 'react'

import Layout from '../components/Layout/HomeLayout'
import SEO from '../components/seo'
import Countdown from '../components/Countdown'
import SocialFeed from '../components/SocialFeed'
import { Header, Wrapper } from '../styled'
import { Link } from 'gatsby'

function loop() {
  if (typeof document !== 'undefined') {
    var i,
      n,
      s = ''

    const title = ['R', 'O', 'S', 'E', ' ', 'H', 'A', 'C', 'K']

    for (i = 0; i < 10; i++) {
      n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4

      s += String.fromCharCode(0x2581 + n)
      s += title[i]
    }

    document.title = s

    setTimeout(loop, 50)
  }
}

loop()

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
