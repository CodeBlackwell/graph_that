import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPlaneCrashData } from '../../actions/actions'

import FlipCardFront from './FlipCardFront'
import FlipCardBack from './FlipCardBack'

const flipSides = {
  front: FlipCardFront,
  back: FlipCardBack
}

// const fakeData = [
//   {id: 1, location: 'germany', fatalities: 10, summary: 'Weather'},
//   {id: 2, location: 'france', fatalities: 18, summary: 'SAM Missile'}, 
//   {id: 3, location: 'Nigeria', fatalities: 15, summary: 'Ocean'}
// ]

class FlipCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displaySide: 'back'
    }
    this._flipCard = this._flipCard.bind(this)
  }

  componentWillMount() {
    this.props.fetchPlaneCrashData()
  }

  _flipCard() {
    const newSide = this.state.displaySide === 'front' ? 'back' : 'front'
    this.setState({displaySide: newSide})
  }


  render() {
    const DisplayComponent = flipSides[this.state.displaySide]
    const planeCrashData = this.props.planeCrashData
    return (
      <div onClick={this._flipCard} className='flip3D'>
        <DisplayComponent dataArray={planeCrashData} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { 
    planeCrashData: state.visualizationData.planeCrashData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaneCrashData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlipCard)

