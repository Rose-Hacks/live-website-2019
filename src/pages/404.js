import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Wrapper } from '../styled'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper style={{ color: `white` }}>
      <h1>404 Page Not Found</h1>
      <p>
        The page you were looking for does not exist{' '}
        <span role="img" aria-label="sad">
          😭
        </span>
      </p>
      <strong>
        <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
          Let's get back to hacking!
        </Link>
      </strong>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
