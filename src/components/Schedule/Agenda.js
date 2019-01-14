import React, { Component } from 'react'
import styled from 'styled-components'

export default class Agenda extends Component {
  processTime = event => {
    let { start, end } = event
    start = start.toString()
    end = end.toString()
    let type

    const handleOver12 = time => {
      let tokens = time.split(':')
      if (parseInt(tokens[0]) > 12) {
        type = 'PM'
        tokens[0] = tokens[0] - 12
      } else if (parseInt(tokens[0]) === 12) {
        type = 'PM'
        tokens[0] = 12
      } else {
        type = 'AM'
      }

      return `${tokens.join(':')} ${type}`
    }

    start = start
      .split(' ')[4]
      .split(':')
      .slice(0, 2)
      .join(':')

    end = end
      .split(' ')[4]
      .split(':')
      .slice(0, 2)
      .join(':')
    return `${handleOver12(start)} - ${handleOver12(end)}`
  }
  render() {
    const { events } = this.props
    return (
      <EventsContainer>
        {events.map(event => {
          return (
            <EventItem key={event.id} className={event.type.toLowerCase()}>
              <p>{this.processTime(event)}</p>
              <p>{event.title}</p>
              <p>{event.resourceId}</p>
            </EventItem>
          )
        })}
      </EventsContainer>
    )
  }
}

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const EventItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 12px;
  background: white;
  padding: 12px;
  border-radius: 3px;

  p {
    margin: 0;
    color: white !important;
  }

  p:nth-of-type(3) {
    text-align: right;
  }
`
