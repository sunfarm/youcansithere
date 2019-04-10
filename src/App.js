import React, { Component } from 'react';
import 'bulma';
import './App.css';
const faChair = require('./chair-solid.svg');

const message = 'you can sit here';

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
                    <p className="is-size-6">
                    Created by <a
                        className="App-link is-pull-right"
                        href="https://nathanaelraway.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Nathanael Raway</a>
                    </p>

                </header>
            </div>
        );
    }
}

export default App;
