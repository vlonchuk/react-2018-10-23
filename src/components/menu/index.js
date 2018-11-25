import React, { Component } from 'react'
import { Consumer as TranslateConsumer } from '../../contexts/translate'
import MenuItem from './menu-item'

class Menu extends Component {
  render() {
    return (
      <TranslateConsumer>
        {(dictionary) => (
          <div>
            <h2>{dictionary.MAIN_MENU}</h2>
            {this.props.children}
          </div>
        )}
      </TranslateConsumer>
    )
  }
}

export default Menu
export { MenuItem }
