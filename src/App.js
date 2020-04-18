import React from 'react';
import axios from 'axios';
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
     firstNameError: "",
     secondName: "Zhou",
     secondNameError: "",
     gender: 'male',
     grade: 'junior',
     skills: ['java','c++'],
     provinces: locationData.provinces,
     provinceId: 1,
     cities: locationData.cities.filter(city => city.provinceId === 1),
     cityId: 1,
   }

  addFirstName = ({firstName,firstNameError}) => {
    this.setState({firstName: firstName, firstNameError})
  }
  addSecondName = ({secondName, secondNameError}) => {
    this.setState({secondName,secondNameError})
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
     axios.post(`http://localhost:3001/profile/`,{
       firstName: this.state.firstName,
       secondName: this.state.secondName,
       gender: this.state.gender,
       grade: this.state.grade,
       skills: this.state.skills,
       province: this.state.provinces.filter(province => province.id === this.state.provinceId)[0].name,
       city: this.state.cities.filter(city => city.id === this.state.cityId)[0].name
     }).then((response) => {
       console.log(response)
     },(error) => {
       console.log(error)
     })
  };
  changeProvince = provinceId => {
    const selectedCities = locationData.cities.filter(city => city.provinceId === provinceId)
    const defaultSelectedCityId = selectedCities[0].id
    this.setState({provinceId,cities:selectedCities,cityId:defaultSelectedCityId})
  }
  changeCity = cityId => {
     this.setState({cityId})
  }
  render() {
    const isDisabledToSubmit = this.state.firstNameError !== "" || this.state.secondNameError !== ""
    return (
        <form>
          <NameInput firstName={this.state.firstName} secondName={this.state.secondName} addFirstName={this.addFirstName} addSecondName={this.addSecondName} firstNameError={this.state.firstNameError} secondNameError={this.state.secondNameError}/>
          <GenderSelection changeGender={this.changeGender} gender={this.state.gender}/>
          <GradeSelection changeGrade={this.changeGrade} grade={this.state.grade}/>
          <SkillsSelection changeSkills={this.changeSkills} skills={this.state.skills}/>
          <Province data={this.state.provinces} selectedId={this.state.provinceId} changeProvince={this.changeProvince}/>
          <City data={this.state.cities} selectedId={this.state.cityId} changeCity={this.changeCity}/>
          <SubmitButton handleLogIn={this.handleLogIn} isDisabledToSubmit={isDisabledToSubmit}/>
        </form>
    );
  }
}

export default App;
