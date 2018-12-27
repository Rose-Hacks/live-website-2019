import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 32px;
  background: rgba(0, 0, 0, 0.27);
  border-radius: 5px;
  margin-bottom: 36px;

  p,
  ul,
  li {
    font-family: 'Lato', sans-serif;
    color: white;
    font-size: 1.5em;
    line-height: 1.3;
  }

  p:last-of-type,
  ul,
  ol,
  li:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: #20acc3;
    text-decoration: none;
  }
`

export default Wrapper
