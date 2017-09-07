import React, { Component } from 'react';
import './App.css';
import Home from './components/home.component.js';
import About from './components/about.component.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">
                <div className="App-header">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
                </div>
                <div className="App-form">
                  <Button />
                </div>
                <div className="App-body" component="{Home}">

                </div>

              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          
              </div>
            </Router>

        );
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}
export default App;
