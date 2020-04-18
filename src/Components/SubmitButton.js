import React from 'react'

class SubmitButton extends React.Component{
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleLogIn()
  }
  render() {
    return (
      <input type="submit" onClick={this.handleSubmit} disabled={this.props.isDisabledToSubmit}/>
    )
  }
}

export default SubmitButton