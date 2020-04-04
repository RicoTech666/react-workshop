import React from 'react';
import './App.css';
import NameInput from './Components/NameInput'
import SubmitButton from './Components/SubmitButton'
import GenderSelection from "./Components/GenderSelection";
import GradeSelection from "./Components/GradeSelection";
import SkillsSelection from "./Components/SkillsSelection";

class App extends React.Component{
   state = {firstName: "Jiachen", secondName: "Zhou", gender: 'male', grade: 'junior', skills: ['java','c++']}
  addFirstName = firstName => {
    this.setState({firstName: firstName})
  }
  addSecondName = secondName => {
    this.setState({secondName: secondName})
  }
  changeGender = gender => {
     this.setState({gender})
  }
  changeGrade = grade => {
     this.setState({grade})
  }
  changeSkills = skills => {
     this.setState({skills})
  }
  handleLogIn = () => {
    alert(`First Name: ${this.state.firstName}, Second Name: ${this.state.secondName}`)
  }
  render() {
    return (
        <form>
          <NameInput firstName={this.state.firstName} secondName={this.state.secondName} addFirstName={this.addFirstName} addSecondName={this.addSecondName}/>
          <SubmitButton handleLogIn={this.handleLogIn} />
          <GenderSelection changeGender={this.changeGender} gender={this.state.gender}/>
          <GradeSelection changeGrade={this.changeGrade} grade={this.state.grade}/>
          <SkillsSelection changeSkills={this.changeSkills} skills={this.state.skills}/>
        </form>
    );
  }
}

export default App;
