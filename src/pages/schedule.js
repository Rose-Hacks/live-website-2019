import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import Schedule from '../components/Schedule'
import { Header } from '../styled'

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" keywords={[`schedule`, 'events', 'workshops']} />
    <Header>Schedule</Header>
    <Schedule />
  </Layout>
)

export default SchedulePage
