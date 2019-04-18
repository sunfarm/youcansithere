import React, { Component } from 'react'
import 'bulma'
import './App.css'
const faChair = require('./chair-solid.svg')

const message = 'you can sit here'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img className='App-logo' src={faChair} alt='chair' />
          <h1>{message}</h1>
          <p className='is-size-6'>
            <a className='App-link' href='https://youcansithere.com'>youcansithere.com</a>
            &nbsp;was created by&nbsp;
            <a className='App-link is-pull-right' href='https://nathanaelraway.com'>Nathanael Raway</a>
          </p>
        </header>
      </div>
    )
  }
}

export default App
