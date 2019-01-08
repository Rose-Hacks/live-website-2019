import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from '../header'
import SponsorCarousel from '../SponsorsCarousel'
import './layout.css'
import Hero from '../Hero'

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5;
`

const HomeLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryHome {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavWrapper>
          <Wrapper>
            <Header siteTitle={data.site.siteMetadata.title} isHome />
          </Wrapper>
        </NavWrapper>
        <Hero />
        <Wrapper>
          <>{children}</>
        </Wrapper>
        <SponsorCarousel />
      </>
    )}
  />
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
