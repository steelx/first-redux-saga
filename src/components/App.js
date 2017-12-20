import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }} >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Component's</h1>
        </header>
        <section className="App-intro">
          <div>
            <h1>Redux Saga</h1>
            <div>
              {this.props.starWars.people.map((person, i) => <h4 key={i}>{person.name}</h4>)}
            </div>
            <button onClick={this.props.fetchStarwarsRequest}>Load More</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
