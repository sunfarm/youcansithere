import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma';
import './App.css';
const faChair = require('./chair-solid.svg');

const message = 'Feel free to sit here';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img className=" App-logo" src={faChair} alt="chair" />
                    <h1>{message}</h1>
                    <a
                        className="App-link"
                        href="https://youcansithere.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        youcansithere.com
          </a>
                </header>
            </div>
        );
    }
}

export default App;
