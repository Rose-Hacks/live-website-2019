import React, { Component } from 'react'
import { Header, Wrapper, Input, Emphasis } from '../../styled'

export default class Wifi extends Component {
  state = {
    username: '',
    password: '',
  }

  onRequest = () => {
    //TODO: Add fetch request to API
    this.setState({ username: 'Ada', password: 'Lovelace' })
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <Wrapper>
          <p>Hi there! 👋</p>
          <p>
            If you're on this page then you need directions on how to connect to
            our wifi. Please follow the directions below.
          </p>
        </Wrapper>

        <Wrapper>
          <ol>
            <li>
              You will need to request a <Emphasis>username</Emphasis> and{' '}
              <Emphasis>password</Emphasis>.
              {username ? (
                <>
                  <p>
                    <strong>Username: </strong> <Emphasis>{username}</Emphasis>
                  </p>
                  <p>
                    <strong>Password: </strong>
                    <Emphasis>{password}</Emphasis>
                  </p>
                </>
              ) : (
                <div>
                  <button onClick={this.onRequest}>Request</button>
                </div>
              )}
            </li>
            <li>
              Connect to the network called <Emphasis>ucrwpa</Emphasis> using
              the credentials above.
            </li>
            <li>
              If you are having trouble, please get in touch with an organizer.
            </li>
          </ol>
        </Wrapper>
      </div>
    )
  }
}
