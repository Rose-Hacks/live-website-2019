import React from 'react'
import Timeline, {
  defaultSubHeaderLabelFormats,
  TimelineMarkers,
  TodayMarker,
  CustomMarker,
} from 'react-calendar-timeline'
import './schedule.css'
import moment from 'moment'
import { Wrapper } from '../../styled'

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
  { id: 3, title: 'Chung 142' },
  { id: 4, title: 'Chung 143' },
  { id: 5, title: 'Chung 144' },
  { id: 6, title: 'Chung 145' },
  { id: 7, title: 'Chung 205/206' },
]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment('1/19/2018 8:00'),
    end_time: moment('1/19/2018 10:00'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment('1/19/2018 10:00'),
    end_time: moment('1/19/2018 14:00'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment('1/19/2018 8:00'),
    end_time: moment('1/19/2018 16:00'),
  },
  {
    id: 3,
    group: 1,
    title: 'Workshop',
    start_time: moment(),
    end_time: moment().add(+2, 'hours'),
  },
  {
    id: 4,
    group: 2,
    title: 'Face Masks with Wendy',
    start_time: moment().add(-2, 'hours'),
    end_time: moment().add(+4, 'hours'),
  },
  {
    id: 5,
    group: 4,
    title: 'Aaroh Raps',
    start_time: moment().add(-1, 'hours'),
    end_time: moment().add(+3, 'hours'),
  },
  {
    id: 6,
    group: 5,
    title: 'Patrick vapes',
    start_time: moment().add(-1, 'hours'),
    end_time: moment().add(+3, 'hours'),
  },
]

const Schedule = () => (
  <Wrapper>
    <Timeline
      subHeaderLabelFormats={usSubHeaderLabelFormats}
      sidebarContent={'Location'}
      groups={groups}
      items={items}
      // defaultTimeStart={moment('1/19/2018 8:00')}
      // defaultTimeEnd={moment('1/20/2018 17:00')}
      defaultTimeStart={moment().add(-2, 'hour')}
      defaultTimeEnd={moment().add(4, 'hour')}
      dragSnap
      lineHeight={64}
      minZoom={60 * 60 * 1000 * 4}
      canMove={false}
      canChangeGroup={false}
      //   stackItems={true}
      timeSteps={{ second: 1, minute: 30, hour: 1, day: 1, month: 1, year: 1 }}
      //   style={{ background: `#e4e4e4` }}
    >
      <TimelineMarkers>
        {/* <TodayMarker /> */}
        <CustomMarker date={moment().add(+2, 'hour')} />
        {/* <CustomMarker date={moment()}>
          ({date}) => {<div style={styles} />}
        </CustomMarker> */}
      </TimelineMarkers>
    </Timeline>
  </Wrapper>
)

export default Schedule
