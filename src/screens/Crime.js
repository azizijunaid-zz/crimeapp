import React, { Component } from 'react'
import api from '../config/api';
export default class Crime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeCategory: [],
      forces: [],
      category: '',
      force: ''
    }
    // this.crimeHandler.bind(this);
    // this.forceHandler.bind(this);
  }

  componentDidMount() {
    api.getCrimeCategory()
      .then(data => this.setState({ crimeCategory: data }));

    api.getForces()
      .then(data => this.setState({ forces: data }));
  }

  crimeHandler(event) {
    this.setState({ category: event.target.value })
  }

  forceHandler(event) {
    this.setState({ force: event.target.value })
  }

  search() {
    this.state.category && this.state.force && api.getCrimes(this.state.category, this.state.force)
      .then(data => this.setState({ crimeDetails: data }));
  }
  render() {
    const { crimeCategory, forces, force, category, crimeDetails } = this.state;
    console.log(this.state)
    return (
      <div>
        <select title="Crime Category" className="selectpicker" onChange={this.crimeHandler.bind(this)}>
          <option disabled>Select...</option>
          {
            crimeCategory && crimeCategory.map((crime, index) => <option key={index} value={crime.url}>{crime.name}</option>)
          }
        </select>

        <select title="Forces" className="selectpicker" onChange={this.forceHandler.bind(this)}>
          <option disabled>Select...</option>
          {
            forces && forces.map((force, index) => <option key={index} value={force.id}>{force.name}</option>)
          }
        </select>

        <button onClick={this.search.bind(this)}>Search</button>

        {
          category && force && <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Month</th>
                <th>Outcomes</th>
              </tr>
            </thead>
            <tbody>
            {crimeDetails && crimeDetails.length && crimeDetails.map(item => (<tr>
                    <td>{item.category}</td>
                    <td>{item.month}</td>
                    <td>{item.outcome_status.category}</td>
                  </tr>))}
            </tbody>
          </table>
        }
      </div>
    )
  }
}
