import React, { Component } from 'react'
import { Wrapper, Emphasis } from '../../styled'

export default class Wifi extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    numRequests: 0,
  }

  componentDidMount = () => {
    this.setState({
      username: localStorage.getItem('wifi-username') || '',
      password: localStorage.getItem('wifi-password') || '',
      numRequests: localStorage.getItem('wifi-requests') || 0,
    })
  }

  onRequest = async () => {
    const REQUEST_URL =
      'https://us-central1-wifi-service-2019.cloudfunctions.net/wifi'

    if (this.state.numRequests > 5) {
      alert(
        "You've requested too many wifi credentials. If you are having trouble please contact an organizer."
      )
      return
    }

    const res = await fetch(REQUEST_URL)
    const creds = await res.json()

    if (creds.success) {
      this.setState({
        username: creds.entry.username,
        password: creds.entry.password,
        numRequests: this.state.numRequests + 1,
      })
      localStorage.setItem('wifi-username', creds.entry.username)
      localStorage.setItem('wifi-password', creds.entry.password)
      localStorage.setItem('wifi-requests', this.state.numRequests)
    } else {
      this.setState({ errorMessage: creds.message, username: '', password: '' })
    }
  }

  render() {
    const { username, password, errorMessage } = this.state

    return (
      <div>
        <Wrapper>
          <p>
            Hi there!{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </p>
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
              {username && (
                <>
                  <p>
                    <strong>Username: </strong> <Emphasis>{username}</Emphasis>
                  </p>
                  <p>
                    <strong>Password: </strong>
                    <Emphasis>{password}</Emphasis>
                  </p>
                  <button onClick={this.onRequest}>
                    Doesn't work? Request another!
                  </button>
                </>
              )}
              {!errorMessage && !username ? (
                <div>
                  <button onClick={this.onRequest}>Request</button>
                </div>
              ) : (
                <p style={{ color: `red` }}>{errorMessage}</p>
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
