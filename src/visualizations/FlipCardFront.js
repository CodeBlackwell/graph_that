import React, { Component } from 'react'

export default class FlipCardFront extends Component {

  _renderRows(dataObject) {
    return (
      <tr key={dataObject.id}>
        <td>{dataObject.location}</td>
        <td>{dataObject.fatalities}</td>
      </tr>
    )
  }

  _renderTable() {
    return (
      <table>
        <thead><tr><th>Location</th><th>Fatalities</th></tr></thead>
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