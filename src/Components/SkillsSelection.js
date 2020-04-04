import React from 'react'

class SkillsSelection extends React.Component{
  handleOptionChange = (event) => {
    const skillToBeAdded = event.currentTarget.value
    const skills = this.props.skills
    skills.includes(skillToBeAdded) ? skills.splice(skills.indexOf(skillToBeAdded),1) : skills.push(skillToBeAdded)
    this.props.changeSkills(skills)
  }

  render() {
    return (
      <select name="grade" multiple={true} value={this.props.skills} onChange={this.handleOptionChange}>
        <option value="java">Java</option>
        <option value="c++">C++</option>
        <option value="python">Python</option>
        <option value="html/css/js">Html/Css/Javascript</option>
      </select>
    )
  }
}

export default SkillsSelection
