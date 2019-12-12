import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import RoomList from './components/RoomList';
import firebase from './components/Firebase.js'  


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/'>Landing</Link>
          </nav>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </div>
    );
  }
}

export default App;