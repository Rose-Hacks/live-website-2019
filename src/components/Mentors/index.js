import React, { Component } from 'react'
import MentorItem from './MentorItem'
import styled from 'styled-components'

const MentorsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default class Mentors extends Component {
  state = {
    searchQuery: '',
    mentors: [
      {
        name: 'Sirina Nabhan',
        company: 'NASA JPL',
        skills: 'presentation, idea formulation, VBA/MatLAB, some C++',
      },
      {
        name: 'Raelene Gonzales',
        company: 'Google',
        skills:
          'Java, python, design, database, dart, JavaScript, html, css, sql, informatics',
      },
      {
        name: 'Melanie Whalen',
        company: 'Esri',
        skills: 'ArcGIS Runtime SDKs, python, C#, Java',
      },
      {
        name: 'Christopher Curtis',
        company: 'Esri',
        skills: 'C++, C#, Python, ArcGIS',
      },
      {
        name: 'Morgan Zhang',
        company: 'Esri',
        skills: 'esri, arcgis',
      },
      {
        name: 'Lauren Boyd',
        company: 'Esri',
        skills: '.NET, Java, Android, JavaScript, Esri products',
      },
      {
        name: 'Dhrumil Shah',
        company: 'Esri',
        skills: 'JavaScript, C#',
      },
      {
        name: 'Roxana González-Burgos',
        company: 'NASA JPL',
        skills:
          'web development, JS, CSS, HTML, Angular, D3.js, underscore/lodash, node.js, Python, java, c++',
      },
      {
        name: 'Eric	Oij',
        company: 'NASA JPL',
        skills: 'python, java, networking',
      },
      {
        name: 'Jesse Mendoza',
        company: 'NASA JPL',
        skills: 'Python',
      },
    ],
  }

  onChangeSearch = e => {
    this.setState({ searchQuery: e.target.value })
  }

  filterMentors = mentor => {
    const skills = mentor.skills.split(',').map(skill => skill.toLowerCase())

    return skills.some(skill => {
      if (skill.includes(this.state.searchQuery)) {
        return true
      }
      return false
    })
  }

  mentorsSearch = () => {
    if (this.state.searchQuery === '') return this.state.mentors
    return this.state.mentors.filter(this.filterMentors)
  }

  render() {
    const { mentors, searchQuery } = this.state

    return (
      <>
        <label style={{ color: `white` }}>
          Search for a skill
          <input onChange={this.onChangeSearch} value={searchQuery} />
        </label>
        <MentorsWrapper>
          {this.mentorsSearch().map(mentor => (
            <MentorItem mentor={mentor} />
          ))}
        </MentorsWrapper>
      </>
    )
  }
}
