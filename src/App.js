import React, { Component } from 'react';
import './App.css';

{/* Imports components */}
import Announcement from './Announcement.jsx';
import ResetButton from './ResetButton.jsx';
import Tile from './Tile.jsx';

class App extends Component {
  constructor(){
    super();
    {/* Defines the state of the board */}
    this.state = {
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'x'
    }
  }

  updateBoard(loc, player){

  }

  render() {
    return (
      <div className="container">
        {/* Header */}
        <div className="menu">
          <h1>Tic Tac Toe - React</h1>
          <Announcement />
          <ResetButton />
        </div>
        {/* Maps the gameBoard and retrieves value and index */}
        {this.state.gameBoard.map(function(value,i){
          return (
            <Tile 
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn}
            />
          )
        }.bind(this))}
      </div>
    );
  }
}

export default App;
