import React from 'react'
import styled from 'styled-components'

const MentorCard = styled.div`
  background: white;
  width: 400px;
  margin-bottom: 24px;
  border-radius: 4px;
  border-top: 6px solid #e68dcb;
  position: relative;
`

const MentorCardWrapper = styled.div`
  padding: 36px;
`

const MentorName = styled.h1`
  font-family: Lato, sans-serif;
  margin-bottom: 0px;
`

const MentorCompany = styled.h3`
  font-family: Lato, sans-serif;
  color: #9c9c9c;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
`

const Skill = styled.div`
  font-family: Lato, sans-serif;
  background: #89647b;
  padding: 5px;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 6px;
  color: white;
`

const ContactButton = styled.div`
  font-family: Montserrat, sans-serif;
  background: #775b95;
  position: absolute;
  width: 100%;
  color: white;
  bottom: 0;
  text-align: center;
  cursor: pointer;
  padding: 6px;
`

const MentorItem = ({ mentor }) => {
  return (
    <MentorCard>
      <MentorCardWrapper>
        <MentorName>{mentor.name}</MentorName>
        <MentorCompany>{mentor.company}</MentorCompany>
        <SkillsContainer>
          {mentor.skills.split(',').map(skill => (
            <Skill>{skill}</Skill>
          ))}
        </SkillsContainer>
      </MentorCardWrapper>

      <ContactButton>Message me!</ContactButton>
    </MentorCard>
  )
}

export default MentorItem
