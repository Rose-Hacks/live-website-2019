import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const Logo =
  'https://res.cloudinary.com/rosehack/image/upload/f_auto,dpr_auto,h_100/logo.png'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  align-items: center;

  @media (max-width: 650px) {
    padding: 0 12px;
  }
`

const LogoWrapper = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 0px;
`

const ActionsWrapper = styled.span`
  margin-left: auto;
`
const ActionStyles = css`
  font-family: 'Lato', sans-serif;
  color: #20acc3;
  text-decoration: none;
  margin-left: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgb(34, 101, 150);
    color: #00dbff;
  }
`

const ActionInternal = styled(Link)`
  ${ActionStyles}
`

const ActionExternal = styled.a`
  ${ActionStyles}
`

const activeStyle = {
  background: `rgb(34, 101, 150)`,
  color: `#00dbff`,
}

const NavItems = [
  {
    name: 'Get Started',
    path: '/getting-started',
    classes: 'noMobile',
  },
  {
    name: 'Schedule',
    path: '/schedule',
  },
  {
    name: 'Map',
    path: '/map',
  },
  {
    name: 'Mentors',
    path: '/mentors',
    classes: 'noMobile',
  },
  {
    name: 'Wi-Fi',
    path: '/wifi',
  },
  {
    name: 'Slack',
    path: 'https://rosehack2019.slack.com',
    classes: 'noMobile',
  },
  // {
  //   name: 'Code of Conduct',
  //   path: '/code-of-conduct',
  // },
  {
    name: 'Submit Project',
    path: 'http://devpost.com',
    classes: 'noMobile',
  },
]

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/" style={{ height: `50px` }}>
      <LogoWrapper src={Logo} alt="" />
    </Link>
    <ActionsWrapper>
      {NavItems.map(item => {
        if (item.path.includes('http')) {
          return (
            <ActionExternal
              href={item.path}
              key={item.path}
              target="_blank"
              className={item.classes}
            >
              {item.name}
            </ActionExternal>
          )
        } else {
          return (
            <ActionInternal
              to={item.path}
              key={item.path}
              activeStyle={activeStyle}
              className={item.classes}
            >
              {item.name}
            </ActionInternal>
          )
        }
      })}
    </ActionsWrapper>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
