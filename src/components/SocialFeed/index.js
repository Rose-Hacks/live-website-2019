import React from 'react'
import { Header, SubHeader, Wrapper } from '../../styled'
import styled from 'styled-components'

const Hashtag = styled.span`
  color: #00fff6;
`

const SocialFeed = () => {
  return (
    <>
      <Header>Social</Header>
      <SubHeader>
        Use <Hashtag>#rosehack2019</Hashtag> on social media to be featured
        below!
      </SubHeader>
      <Wrapper>
        <iframe
          allowfullscreen=""
          id="wallsio-iframe"
          src="https://walls.io/yehfq?nobackground=1&amp;show_header=0"
          style={{ border: 0, height: `800px`, width: `100%` }}
        />
      </Wrapper>
      <script
        src="https://walls.io/js/wallsio-widget-1.2.js"
        data-wallurl="https://walls.io/yehfq?nobackground=1&amp;show_header=0"
        data-width="100%"
        data-autoheight="1"
        data-height="800"
        data-lazyload="1"
      />
    </>
  )
}

export default SocialFeed
