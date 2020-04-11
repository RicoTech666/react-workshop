import React from 'react'

class GenderSelection extends React.Component{
  handleOptionChange = (event) => {
    this.props.changeGender(event.currentTarget.value)
  }

  render() {
    return (
      <div>
        <label htmlFor="male">Male</label>
        <input type="radio" id='male' name='gender' value='male' checked={this.props.gender==='male'} onChange={this.handleOptionChange}/>
        <label htmlFor='female'>Female</label>
        <input type="radio" id='female' name='gender' value='female' checked={this.props.gender==='female'} onChange={this.handleOptionChange}/>
      </div>
    )
  }
}

export default GenderSelection
