import React, { Component } from 'react';
import Main from './components/Main'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      charactors: []
    }
  }

  componentDidMount = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character/1';

    axios.get(apiUrl)
      .then((response) => {
        console.log('This is your data', response.data);

        this.setState((state) => ({
          charactors: [...state.charactors, response.data]
        }))

      });
  }

  render() {
    return (
      <div className="App">
        <Main charactors={this.state.charactors} />
      </div>
    );
  }
}

export default App;
