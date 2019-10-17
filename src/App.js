import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <CardList name="Yihuoa">
          {
            this.state.monsters.map(monster => (<h2 key={monster.id}> {monster.name} </h2>))
          }
        </CardList>
      </div>
    )
  }
}

export default App;
