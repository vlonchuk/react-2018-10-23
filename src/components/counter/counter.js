import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementActionCreator } from '../../ac'
import { Consumer as TranslateConsumer } from '../../contexts/translate'

class Counter extends Component {
  render() {
    console.log('Counter')
    return (
      <TranslateConsumer>
        {(dictionary) => (
          <div>
            <h1>{this.props.countProp}</h1>
            <button onClick={this.handleClick}>{dictionary.INCREASE}</button>
          </div>
        )}
      </TranslateConsumer>
    )
  }
  handleClick = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  countProp: state.count
})
const mapDispatchToProps = {
  increment: incrementActionCreator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
