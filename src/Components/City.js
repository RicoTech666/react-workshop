import React from "react";

class City extends React.Component{
  handleCityChange = event => {
    this.props.changeCity(parseInt(event.target.value))
  }
  render() {
    return (
      <div>
        <label htmlFor="city-selection">Select Your City</label>
        <select name="city" id="city-selection" value={this.props.selectedId} onChange={this.handleCityChange}>
          {this.props.data.map(city => (
            <option
              key={city.id}
              value={city.id}
            >
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default City
