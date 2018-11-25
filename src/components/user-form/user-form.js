import React, { Component } from 'react'
import { Consumer as TranslateConsumer } from '../../contexts/translate'

export default class UserForm extends Component {
  render() {
    return (
      <TranslateConsumer>
        {(dictionary) => (
          <form>
            {dictionary.USER_NAME}:
            <input
              value={this.props.value}
              onChange={this.handleUserNameInput}
            />
          </form>
        )}
      </TranslateConsumer>
    )
  }

  handleUserNameInput = (event) => {
    this.props.onChange(event.target.value)
  }
}
