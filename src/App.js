import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [
        {
          name: 'Frankenshein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asf2'
        },
        {
          name: 'Zombie',
          id: 'asd1w'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map(monster => (<h2 key={monster.id}> {monster.name} </h2>))
        }
      </div>
    )
  }
}

export default App;
