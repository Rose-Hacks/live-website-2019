import React from 'react'
import Timeline, {
  defaultSubHeaderLabelFormats,
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
} from 'react-calendar-timeline'
import './schedule.css'
import moment from 'moment'
import { Wrapper, Header } from '../../styled'
import Agenda from './Agenda'
import Events from './events'

const usSubHeaderLabelFormats = Object.assign(
  {},
  defaultSubHeaderLabelFormats,
  {
    hourShort: 'h A',
    hourLong: 'h A',
    minuteLong: 'h:mm A',
  }
)

const groups = [
  { id: 1, title: 'Bytes' },
  { id: 2, title: 'Chung 138' },
  { id: 3, title: 'Chung 205/206' },
  { id: 4, title: 'Chung 142' },
  { id: 5, title: 'Chung 143' },
  { id: 6, title: 'Chung 144' },
  { id: 7, title: 'Chung 145' },
  { id: 8, title: 'Chung Patio' },
]

const items = [
  {
    id: 0,
    group: 1,
    title: 'Check In & Breakfast',
    start_time: moment('1/19/2019 9:00'),
    end_time: moment('1/19/2019 10:00'),
  },
  {
    id: 2,
    group: 2,
    title: 'Opening Ceremony',
    start_time: moment('1/19/2019 10:30'),
    end_time: moment('1/19/2019 11:55'),
  },
  {
    id: 3,
    group: 1,
    title: 'Lunch',
    start_time: moment('1/19/2019 12:00'),
    end_time: moment('1/19/2019 13:00'),
  },
  {
    id: 4,
    group: 3,
    title: 'Sponsors Room Open',
    start_time: moment('1/19/2019 12:00'),
    end_time: moment('1/19/2019 17:00'),
  },
  {
    id: 5,
    group: 2,
    title: 'Team Building',
    start_time: moment('1/19/2019 12:00'),
    end_time: moment('1/19/2019 12:30'),
  },
  {
    id: 6,
    group: 5,
    title: 'Intro to Git & GitHub Workshop',
    start_time: moment('1/19/2019 12:30'),
    end_time: moment('1/19/2019 13:30'),
  },
  {
    id: 7,
    group: 4,
    title: 'Android Development Workshop',
    start_time: moment('1/19/2019 13:30'),
    end_time: moment('1/19/2019 14:30'),
  },
  {
    id: 8,
    group: 6,
    title: 'iOS Development Workshop',
    start_time: moment('1/19/2019 13:30'),
    end_time: moment('1/19/2019 14:30'),
  },
  {
    id: 9,
    group: 7,
    title: 'Game Design Workshop',
    start_time: moment('1/19/2019 14:30'),
    end_time: moment('1/19/2019 15:30'),
  },
  {
    id: 10,
    group: 5,
    title: 'Web Development Workshop',
    start_time: moment('1/19/2019 14:30'),
    end_time: moment('1/19/2019 15:30'),
  },
  {
    id: 11,
    group: 6,
    title: 'Data Science Workshop',
    start_time: moment('1/19/2019 15:30'),
    end_time: moment('1/19/2019 16:30'),
  },
  {
    id: 12,
    group: 4,
    title: "Esri's GIS Workshop",
    start_time: moment('1/19/2019 15:30'),
    end_time: moment('1/19/2019 16:30'),
  },
  {
    id: 13,
    group: 7,
    title: "mongoDB's Build a Web App with MongoDB Workshop",
    start_time: moment('1/19/2019 16:30'),
    end_time: moment('1/19/2019 17:30'),
  },
  {
    id: 14,
    group: 5,
    title: "Google's Tech Talk",
    start_time: moment('1/19/2019 16:30'),
    end_time: moment('1/19/2019 17:30'),
  },
  {
    id: 15,
    group: 4,
    title: "Auth0's Security Workshop",
    start_time: moment('1/19/2019 17:30'),
    end_time: moment('1/19/2019 18:30'),
  },
  {
    id: 16,
    group: 1,
    title: 'Dinner',
    start_time: moment('1/19/2019 18:30'),
    end_time: moment('1/19/2019 20:00'),
  },
  {
    id: 17,
    group: 4,
    title: 'Group Therapy',
    start_time: moment('1/19/2019 21:00'),
    end_time: moment('1/19/2019 22:00'),
  },
  {
    id: 18,
    group: 2,
    title: "MLH's Cup Stacking",
    start_time: moment('1/19/2019 23:00'),
    end_time: moment('1/20/2019 00:00'),
  },
  {
    id: 19,
    group: 1,
    title: 'Midnight Face Masks',
    start_time: moment('1/20/2019 00:00'),
    end_time: moment('1/20/2019 01:00'),
  },
  {
    id: 20,
    group: 5,
    title: "Ocean's 8 Movie Showing",
    start_time: moment('1/20/2019 01:30'),
    end_time: moment('1/20/2019 03:00'),
  },
  {
    id: 21,
    group: 8,
    title: 'Swag Pinata',
    start_time: moment('1/20/2019 04:00'),
    end_time: moment('1/20/2019 05:00'),
  },
  {
    id: 22,
    group: 8,
    title: 'Morning Yoga',
    start_time: moment('1/20/2019 07:00'),
    end_time: moment('1/20/2019 08:00'),
  },
  {
    id: 23,
    group: 1,
    title: 'Breakfast',
    start_time: moment('1/20/2019 08:00'),
    end_time: moment('1/20/2019 09:30'),
  },
  {
    id: 24,
    group: 6,
    title: 'UI/UX Workshop',
    start_time: moment('1/20/2019 08:00'),
    end_time: moment('1/20/2019 09:00'),
  },
  {
    id: 25,
    group: 4,
    title: 'Technical Interview Workshop',
    start_time: moment('1/20/2019 09:00'),
    end_time: moment('1/20/2019 10:00'),
  },
  {
    id: 26,
    group: 7,
    title: 'Women in Tech Panel',
    start_time: moment('1/20/2019 10:00'),
    end_time: moment('1/20/2019 11:00'),
  },
  {
    id: 27,
    group: 1,
    title: 'Lunch',
    start_time: moment('1/20/2019 12:00'),
    end_time: moment('1/20/2019 13:00'),
  },
  {
    id: 28,
    group: 2,
    title: 'Demos',
    start_time: moment('1/20/2019 13:00'),
    end_time: moment('1/20/2019 14:30'),
  },
  {
    id: 29,
    group: 2,
    title: 'Closing Ceremony',
    start_time: moment('1/20/2019 15:00'),
    end_time: moment('1/20/2019 16:00'),
  },
]

const Schedule = () => (
  <Wrapper>
    <Timeline
      subHeaderLabelFormats={usSubHeaderLabelFormats}
      sidebarContent={'Location'}
      groups={groups}
      items={items}
      // defaultTimeStart={moment('1/19/2019 8:00')}
      // defaultTimeEnd={moment('1/20/2019 17:00')}
      defaultTimeStart={moment('1/19/2019 7:00')}
      defaultTimeEnd={moment('1/19/2019 10:00')}
      dragSnap
      lineHeight={64}
      minZoom={60 * 60 * 1000 * 4}
      canMove={false}
      canChangeGroup={false}
      stackItems={true}
      timeSteps={{ second: 1, minute: 30, hour: 1, day: 1, month: 1, year: 1 }}
      //   style={{ background: `#e4e4e4` }}
    >
      <TimelineMarkers>
        <TodayMarker />
        {/* <CustomMarker date={moment().add(+2, 'hour')} /> */}
        {/* <CustomMarker date={moment()}>
          ({date}) => {<div style={styles} />}
        </CustomMarker> */}
      </TimelineMarkers>
    </Timeline>

    <Header>Agenda View</Header>
    <Agenda events={Events} />
  </Wrapper>
)

export default Schedule
