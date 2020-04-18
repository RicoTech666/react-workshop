import React from 'react'

class NameInput extends React.Component{
 getNameError = (name) => {
   if(name === "") {
     return "Cannot be empty";
   }
   if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
     return "Must be alphabetic";
   }
   return "";
 };
 handleFirstNameChange = (event) => {
  const firstName = event.currentTarget.value;
  const firstNameError = this.getNameError(firstName);
  this.props.addFirstName({firstNameError, firstName});
 }

 handleSecondNameChange = (event) => {
   const secondName = event.currentTarget.value;
   const secondNameError = this.getNameError(secondName);
   this.props.addSecondName({secondName,secondNameError})
}
  render() {
    return (
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" name='first_name' value={this.props.firstName} onChange={this.handleFirstNameChange}/>
        {this.props.firstNameError
          ? <div> {this.props.firstNameError}</div>
          : null
        }
        <label htmlFor="second_name" >Second Name:</label>
        <input type="text" name='second_name' value={this.props.secondName} onChange={this.handleSecondNameChange} required/>
        {this.props.secondNameError
        ? <div>{this.props.secondNameError}</div>
        : null
        }
      </div>
    )
  }
}

export default NameInput