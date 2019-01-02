import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Header, Wrapper } from '../styled'

const GettingStartedPage = () => (
  <Layout>
    <SEO title="Getting Started" keywords={[`event`, `live`, `portal`]} />
    <Header>Getting Started</Header>
    <Wrapper>
      <p>
        Rose Hack is the perfect place to learn and collaborate with others to
        build something to solve problems. We recommend teaming up with others
        to have the best experience possible!
      </p>
      <p>
        Don't know where to get started? Check out the resources below for free
        stuff you can use in your projects and tutorials.{' '}
        <span role="img" aria-label="down">
          👇
        </span>
      </p>
    </Wrapper>

    <Header>Free Resources</Header>
    <Wrapper>
      <ol>
        <li>
          <a href="https://education.github.com/pack">
            GitHub Student Developer Pack
          </a>{' '}
          for everything from search, domain names, emails, and servers
        </li>
        <li>
          <a href="https://cloud.google.com/free/">Google Cloud Platform</a> for
          servers, machine learning, and much more
        </li>
      </ol>
    </Wrapper>

    <Header>Tutorials</Header>
    <Wrapper>
      <ol>
        <li>
          <a href="https://www.codecademy.com/learn/make-a-website">
            Build a website (HTML/CSS)
          </a>
        </li>
        <li>
          <a href="https://codewithchris.com/how-to-make-iphone-apps-with-no-programming-experience/">
            Build an iOS Application (Swift)
          </a>
        </li>
        <li>
          <a href="https://medium.com/buildbuilds/building-an-android-app-in-10-minutes-2746247fc6f">
            Build an Android Application (Java)
          </a>
        </li>
        <li>
          <a href="https://www.taniarascia.com/getting-started-with-react/">
            Build a Web Application (Javascript/React)
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/community/tutorials/introduction-machine-learning-python">
            Introduction to Machine Learning (Python)
          </a>
        </li>
        <li>
          <a href="https://www.raywenderlich.com/772-introduction-to-unity-getting-started-part-1-2">
            Introduction to Game Development (C#/Unity)
          </a>
        </li>
      </ol>
    </Wrapper>

    <Header>New Languages</Header>
    <Wrapper>
      <ol>
        <li>
          <a href="https://www.codecademy.com/learn/introduction-to-javascript">
            Javascript
          </a>
        </li>
        <li>
          <a href="https://www.codecademy.com/learn/learn-python-3">Python</a>
        </li>
        <li>
          <a href="http://learnyouahaskell.com/">Haskell</a>
        </li>
      </ol>
    </Wrapper>
  </Layout>
)

export default GettingStartedPage
