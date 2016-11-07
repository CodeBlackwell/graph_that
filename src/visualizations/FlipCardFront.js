import React, { Component } from 'react'
import CSS from '../components/AppStyles'

export default class FlipCardFront extends Component {

  _renderRows(dataObject) {
    return (
      <tr key={dataObject.id}>
        <td style={CSS.table}>{dataObject.date}</td>        
        <td style={CSS.table}>{dataObject.location}</td>
        <td style={CSS.table}>{dataObject.fatalities}</td>
        <td style={CSS.table}>{dataObject.summary}</td> 
      </tr>
    )
  }

  _renderTable() {
    return (
      <table style={CSS.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Fatalities</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          { this.props.dataArray.map(this._renderRows) }
        </tbody>
      </table>
    )
  }

  render(){
    return this._renderTable()
  }
}