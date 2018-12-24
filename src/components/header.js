import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import Logo from '../images/logo.png'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  align-items: center;
`

const LogoWrapper = styled.img`
  height: 75px;
  width: auto;
  margin-bottom: 0px;
`

const ActionsWrapper = styled.span`
  margin-left: auto;
`
const ActionStyles = css`
  color: white;
  text-decoration: none;
  margin-left: 12px;
  padding: 6px 12px;
  border-radius: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`
const ActionInternal = styled(Link)`
  ${ActionStyles}
`

const ActionExternal = styled.a`
  ${ActionStyles}
`

const NavItems = [
  {
    name: 'Schedule',
    path: '/schedule',
  },
  {
    name: 'Map',
    path: '/map',
  },
  {
    name: 'Slack',
    path: 'http://rosehacks.slack.com/',
  },
  // {
  //   name: 'Code of Conduct',
  //   path: '/code-of-conduct',
  // },
  {
    name: 'Request a Mentor',
    path: 'http://rosehacks.slack.com/',
  },
  {
    name: 'Submit Project',
    path: 'http://devpost.com',
  },
]

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <LogoWrapper src={Logo} alt="" />
    </Link>
    <ActionsWrapper>
      {NavItems.map(item => {
        if (item.path.includes('http')) {
          return (
            <ActionExternal href={item.path} key={item.path} target="_blank">
              {item.name}
            </ActionExternal>
          )
        } else {
          return (
            <ActionInternal to={item.path} key={item.path}>
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
