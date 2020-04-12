import React from 'react'

class SkillsSelection extends React.Component{
  handleOptionChange = (event) => {
    const skillToBeAdded = event.currentTarget.value
    const skills = this.props.skills
    skills.includes(skillToBeAdded) ? skills.splice(skills.indexOf(skillToBeAdded),1) : skills.push(skillToBeAdded)
    this.props.changeSkills(skills)
  }

  render() {
    const items = [{id:'java',value:'Java'},{id:'c++',value:'C++'},{id:'python',value:'Python'},{id:'html/css/js',value:'Html/Css/Javascript'}];
    return (
      <div>
        <label htmlFor="skills">Select Your Skills: </label>
        <select name="skills" id="skills" multiple={true} value={this.props.skills} onChange={this.handleOptionChange}>
          {items.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.value}
            </option>
        ))}

      </select>
    </div>
  )
  }
}

export default SkillsSelection
