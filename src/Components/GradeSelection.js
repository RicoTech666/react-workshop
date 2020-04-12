import React from 'react'

class GradeSelection extends React.Component{
  handleOptionChange = (event) => {
    this.props.changeGrade(event.currentTarget.value)
  }

  render() {
    return (
     <div>
      <label htmlFor="grade">Select Your Grade: </label>
      <select name="grade" id="grade" value={this.props.grade} onChange={this.handleOptionChange}>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
     </div>
    )
  }
}

export default GradeSelection
