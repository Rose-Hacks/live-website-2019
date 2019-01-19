import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'
import Sponsors from '../globals/sponsors'
import styled from 'styled-components'

const BASE_IMAGE_URL =
  'https://res.cloudinary.com/rosehack/image/upload/q_auto,f_auto,dpr_auto'

const SponsorsPage = () => {
  return (
    <Layout>
      <SEO
        title="Sponsors"
        keywords={[`event`, `live`, `portal`, `sponsors`]}
      />
      <Header>Sponsors</Header>
      <Wrapper>
        <p>
          Rose Hack would like to thank the following {Sponsors.length}{' '}
          wonderful sponsors!
        </p>
      </Wrapper>
      <Wrapper style={{ background: `rgba(255,255,255,.5)` }}>
        <SponsorsContainer>
          {Sponsors.map(s => (
            <img
              src={`${BASE_IMAGE_URL}/${s.public_id}`}
              alt=""
              style={{ order: s.order }}
              className={s.class}
            />
          ))}
        </SponsorsContainer>
      </Wrapper>
    </Layout>
  )
}

export default SponsorsPage

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 25%;
    margin: 20px;
  }

  .moon-shadow {
    width: 75%;
    max-width: unset;
  }

  .moon-shadow:last-of-type {
    margin-bottom: 200px;
  }
`
