import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class FlipCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayGraph: false
    }
  }

  render() {
    // {this.state.displayGraph ? this._renderGraph() : this._renderTable()}
  }

}






function mapStateToProps(state) {
  return
}

function mapDispatchToProps(dispatch){
  return
}

export default connect(mapStateToProps, mapDispatchToProps)(FlipCard)
