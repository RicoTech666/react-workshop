import React from 'react';
import './App.css';
import NameInput from './Components/NameInput'
import SubmitButton from './Components/SubmitButton'
import GenderSelection from "./Components/GenderSelection";
import GradeSelection from "./Components/GradeSelection";
import SkillsSelection from "./Components/SkillsSelection";
import Province from "./Components/Province";
import {locationData} from "./Data";
import City from "./Components/City";

class App extends React.Component{
   state = {
     firstName: "Jiachen",
     secondName: "Zhou",
     gender: 'male',
     grade: 'junior',
     skills: ['java','c++'],
     provinces: locationData.provinces,
     provinceId: 1,
     cities: locationData.cities.filter(city => city.provinceId === 1),
     cityId: 1
   }

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
  changeProvince = provinceId => {
    const selectedCities = locationData.cities.filter(city => city.provinceId === provinceId)
    this.setState({provinceId,cities:selectedCities})
  }
  changeCity = cityId => {
     this.setState({cityId})
  }
  render() {
    return (
        <form>
          <NameInput firstName={this.state.firstName} secondName={this.state.secondName} addFirstName={this.addFirstName} addSecondName={this.addSecondName}/>
          <GenderSelection changeGender={this.changeGender} gender={this.state.gender}/>
          <GradeSelection changeGrade={this.changeGrade} grade={this.state.grade}/>
          <SkillsSelection changeSkills={this.changeSkills} skills={this.state.skills}/>
          <Province data={this.state.provinces} selectedId={this.state.provinceId} changeProvince={this.changeProvince}/>
          <City data={this.state.cities} selectedId={this.state.cityId} changeCity={this.changeCity}/>
          <SubmitButton handleLogIn={this.handleLogIn} />
        </form>
    );
  }
}

export default App;
