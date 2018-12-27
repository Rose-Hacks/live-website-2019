import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Schedule from '../components/Schedule'

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" keywords={[`schedule`, 'events', 'workshops']} />
    <Schedule />
  </Layout>
)

export default SchedulePage
