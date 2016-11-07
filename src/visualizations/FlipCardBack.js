import React, { Component } from 'react'
import * as d3 from 'd3'

export default class FlipCardFront extends Component{

  _renderGraph() {
    const histogram = d3.histogram()
    const bins = histogram(this.props.dataArray)
    console.log(bins)
    return (
      <div>
        <h5> some text </h5>
        <svg
        height="300"
        width="300"
        >
          <circle cx='100' cy='100' r='50' />
        </svg>
      </div>
    )
  }

  render() {
    return this._renderGraph()
  }
} 