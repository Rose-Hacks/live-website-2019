import React from 'react'
import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'
import styled from 'styled-components'

const projects = [
  {
    table: 1,
    title: 'ExperienceTranquility',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 2,
    title: 'Tribute to Hayao Miyazaki',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 3,
    title: 'meTime',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 4,
    title: 'my personal website',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 5,
    title: 'Rosie the Rescuer',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 6,
    title: 'CardConnect',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 7,
    title: '1st Person 3D PacWoman',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 8,
    title: 'Teaspoon',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 9,
    title: 'ER Mate',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 10,
    title: 'classpath',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 11,
    title: 'VR Windows Defender',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 12,
    title: 'GIVE',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 13,
    title: 'Hackiea',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 14,
    title: 'bytesOnline',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 15,
    title: 'Coffee-Peach-Bytes',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 16,
    title: 'Hungry-Students',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 17,
    title: 'Shoot Your Shot',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 18,
    title: 'SnatchBanders',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 19,
    title: 'Tindimals',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 20,
    title: 'PyMash',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 21,
    title: 'NOKORIMONO',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 22,
    title: 'Cameo',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 23,
    title: 'Combento',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 24,
    title: 'Eventiplicity',
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
  {
    table: 25,
    title: "Scottina's Night Out",
    'Round 1': '',
    'Round 2': '',
    'Round 3': '',
    Total: '',
    Notes: '',
  },
]

const DemosPage = () => (
  <Layout>
    <SEO title="Demos" keywords={[`Demos`, 'events', 'workshops']} />
    <Header>Demos</Header>

    <Wrapper>
      {projects.map(p => {
        return (
          <Card>
            <div>
              <p>{p.table}</p>
            </div>
            <div>
              <h1>{p.title}</h1>
            </div>
          </Card>
        )
      })}
    </Wrapper>
  </Layout>
)

export default DemosPage

const Card = styled.div`
  background: #46539c;
  display: flex;
  border-radius: 6px;
  margin-bottom: 24px;
  align-items: center;
  height: 60px;

  h1 {
    margin-left: 10px;
    margin-bottom: 0px;
    color: white;
  }

  div:nth-of-type(1) {
    background: #00000080;
    height: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    display: flex;
    align-items: center;
    padding: 12px;
  }
`
