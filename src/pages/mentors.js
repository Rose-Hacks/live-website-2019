import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'
import Mentors from '../components/Mentors'

const MentorsPage = () => (
  <Layout>
    <SEO title="Mentors" keywords={[`mentors`, `help`, `skills`]} />
    <Header>Mentors</Header>
    <Wrapper>
      <Mentors />
    </Wrapper>
  </Layout>
)

export default MentorsPage
