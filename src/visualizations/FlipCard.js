import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FlipCardFront from './FlipCardFront'
import FlipCardBack from './FlipCardBack'

const flipSides = {
  front: FlipCardFront,
  back: FlipCardBack
}

const fakeData = [{id: 1, location: 'germany', fatalities: 10}, {id: 2, location: 'france', fatalities: 18}, {id: 3, location: 'Nigeria', fatalities: 15}]

class FlipCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displaySide: 'front'
    }

    this._flipCard = this._flipCard.bind(this)
  }

  _flipCard() {
    const newSide = this.state.displaySide === 'front' ? 'back' : 'front'
    this.setState({displaySide: newSide})
  }


  render() {
    const DisplayComponent = flipSides[this.state.displaySide]

    return (
      <div onClick={this._flipCard} className='flip3D'>
         
        <DisplayComponent dataArray={fakeData} />
      </div>
    )
    // { this.state.displayGraph ? this._renderGraph() : this._renderTable() } => will instead be handled by CSS with transforms
  }

}






function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch){
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlipCard)
