import React from 'react'
import Timeline, {
  defaultSubHeaderLabelFormats,
  TimelineMarkers,
  TodayMarker,
} from 'react-calendar-timeline'
import './schedule.css'
import moment from 'moment'
import { Wrapper, Header } from '../../styled'
import Agenda from './Agenda'
import items from './timelineEvents'

const usSubHeaderLabelFormats = Object.assign(
  {},
  defaultSubHeaderLabelFormats,
  {
    hourShort: 'h A',
    hourLong: 'h A',
    minuteLong: 'h:mm A',
  }
)

const Schedule = () => {
  let groups = []
  let events = []

  const processEvents = items => {
    const groupMappings = {}
    const groupExport = []
    let currentGroupId = 0

    items.forEach(item => {
      let curGroup = -1

      if (item.resourceId in groupMappings) {
        curGroup = groupMappings[item.resourceId]
      } else {
        groupMappings[item.resourceId] = currentGroupId
        groupExport.push({ id: currentGroupId, title: item.resourceId })
        curGroup = currentGroupId
        currentGroupId++
      }

      const newItem = {
        id: item.id,
        group: curGroup,
        title: item.title,
        start_time: item.start,
        end_time: item.end,
        className: item.type.toLowerCase(),
      }

      events.push(newItem)
    })

    groups = groupExport
  }

  processEvents(items)
  console.log(events)

  return (
    <Wrapper>
      <Timeline
        subHeaderLabelFormats={usSubHeaderLabelFormats}
        sidebarContent={'Location'}
        groups={groups}
        items={events}
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
        timeSteps={{
          second: 1,
          minute: 30,
          hour: 1,
          day: 1,
          month: 1,
          year: 1,
        }}
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
      <Agenda events={items} />
    </Wrapper>
  )
}

export default Schedule
