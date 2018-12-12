import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Forms from './components/Forms';
import './App.css';

// Main component
class App extends Component {
  componentDidMount() {
    document.body.className = ''
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img src={require('../src/content/images/trophy-32px.png')} width="21" height="32" className="d-inline-block align-top" alt="Logo" />
                Home
              </a>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link className="nav-link" to="/forms">PGA Leaderboard</Link></li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div><hr /></div>
                {this.props.children}
              <Route path="/forms" component={Forms} />
            </div >
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
