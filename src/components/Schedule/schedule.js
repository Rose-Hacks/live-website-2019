import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './schedule-styles.css'
import { Wrapper } from '../../styled'
import { events } from './events'
import { locations } from './locations'

const localizer = BigCalendar.momentLocalizer(moment)

export default class Schedule extends Component {
  render() {
    return (
      <Wrapper backgroundColor="white" style={{ height: `200vh` }}>
        <BigCalendar
          events={events}
          localizer={localizer}
          defaultView={BigCalendar.Views.DAY}
          views={['day']}
          step={30}
          defaultDate={new Date(2019, 0, 19)}
          resources={locations}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
        />
      </Wrapper>
    )
  }
}
