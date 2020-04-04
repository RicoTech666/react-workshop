import React from 'react'

class GradeSelection extends React.Component{
  handleOptionChange = (event) => {
    this.props.changeGrade(event.currentTarget.value)
  }

  render() {
    return (
        <select name="grade" value={this.props.grade} onChange={this.handleOptionChange}>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
    )
  }
}

export default GradeSelection
