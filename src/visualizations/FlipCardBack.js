import React, { Component } from 'react'

export default class FlipCardFront extends Component{

  _renderGraph() {
    return (
      <div>
        <h5> some text </h5>
      </div>
    )
  }

  render() {
    return this._renderGraph()
  }
} 