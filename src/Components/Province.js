import React from "react";

class Province extends React.Component{
  handleProvinceChange = event => {
    this.props.changeProvince(parseInt(event.target.value))
  }
  render() {
    return (
      <div>
        <label htmlFor="province-selection">Select Your Province: </label>
        <select name="province" id="province-selection" value={this.props.selectedId} onChange={this.handleProvinceChange}>
          {this.props.data.map(province => (
            <option
              key={province.id}
              value={province.id}
            >
              {province.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Province