import React, { Component } from 'react';

const selectOptions = [
  { label: 'Todas as distâncias', value: 0 },
  { label: 'Até 5km', value: 5 },
  { label: 'Até 10km', value: 10 },
  { label: 'Até 25km', value: 25 },
  { label: 'Até 50km', value: 50 },
  { label: 'Até 100km', value: 100 }
]

class MapsFilters extends Component {
  handleChangeSelect = (event) => {
    this.props.filterSelect(event.target.value);
  }

  render() {
    const { initialValue } = this.props;
    return (
      <div>
         <label className="label">Distância Máxima</label>
          <p className="control center" >
            <span className="select">
              <select onChange={this.handleChangeSelect} defaultValue={initialValue}>
                {
                  selectOptions.map(option => {
                    return (<option key={option.value} value={option.value}>{option.label}</option>)
                  })
                }
              </select>
            </span>
          </p>
          <hr/>
      </div>
    );
  }
}

export default MapsFilters;
