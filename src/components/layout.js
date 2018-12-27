import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import SponsorCarousel from '../components/SponsorsCarousel'
import './layout.css'

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto 100px auto;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{children}</div>
        </Wrapper>
        <SponsorCarousel />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
