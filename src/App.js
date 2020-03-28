import React from 'react';
import './App.css';
import NameInput from './Components/NameInput'
import SubmitButton from './Components/SubmitButton'

class App extends React.Component{
   state = {firstName: "Jiachen", secondName: "Zhou"}
  addFirstName = firstName => {
    this.setState({firstName: firstName})
  }
  addSecondName = secondName => {
    this.setState({secondName: secondName})
  }
  handleLogIn = () => {
    alert(`First Name: ${this.state.firstName}, Second Name: ${this.state.secondName}`)
  }
  render() {
    return (
        <form>
          <NameInput firstName={this.state.firstName} secondName={this.state.secondName} addFirstName={this.addFirstName} addSecondName={this.addSecondName}/>
          <SubmitButton handleLogIn={this.handleLogIn}/>
        </form>
    );
  }
}

export default App;
