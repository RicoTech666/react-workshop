import React from 'react'

class NameInput extends React.Component{
 handleFirstNameChange = (event) => {
  this.props.addFirstName(event.currentTarget.value)
 }

 handleSecondNameChange = (event) => {
   this.props.addSecondName(event.currentTarget.value)
}
  render() {
    return (
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name='first_name' value={this.props.firstName} onChange={this.handleFirstNameChange}/>
        <label htmlFor="second_name" >Second Name:</label>
        <input type="text" name='second_name' value={this.props.secondName} onChange={this.handleSecondNameChange}/>
      </div>
    )
  }
}

export default NameInput