import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Header } from '../styled'

const SchedulePage = () => (
  <Layout>
    <SEO title="Map" keywords={[`map`, 'events', 'workshops']} />
    <Header>Map</Header>
  </Layout>
)

export default SchedulePage
