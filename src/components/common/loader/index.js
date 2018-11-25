import React from 'react'
import { Consumer as TranslateConsumer } from '../../../contexts/translate'

function Loader(props) {
  return (
    <TranslateConsumer>
      {(dictionary) => <h3>{dictionary.LOADING}</h3>}
    </TranslateConsumer>
  )
}

export default Loader
