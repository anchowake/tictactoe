import React, { Component } from 'react';
import './App.css';

import Announcement from './Announcement.jsx';
import ResetButton from './ResetButton.jsx';
import Tile from './Tile.jsx';

class App extends Component {
  constructor(){
    super();

    this.state={
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'x',
      winner: null,
      invalid: null
    }
  }

  updateBoard(loc, player){
    if(!this.state.winner){
      if(this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o'){
      {/* Sets Invalid Move State */}
        this.setState({invalid: 'Invalid Move'});
        return;  
      }else{
        {/* Resets Invalid Move State */}
        this.setState({invalid: null});
        {/* Place play in the board */}
        let currentGameBoard = this.state.gameBoard;
        currentGameBoard.splice(loc, 1, this.state.turn);
        this.setState({gameBoard: currentGameBoard});

        {/* Changes the player turn */}
        this.setState({turn:(this.state.turn === 'x') ? 'o' : 'x'});

        {/* Check ROWS  to see if there's a winner */}
        for (let i = 0; i <= 8; i+=3){
            let rowsContent = this.state.gameBoard[i] + this.state.gameBoard[i+1] + this.state.gameBoard[i+2];
            if(rowsContent.match(/xxx|ooo/)){
                this.setState({winner:this.state.turn});
            }
        }

        {/* Check COLUMNS to see if there's a winner*/}
        for (let i = 0; i <= 2; i+=1){
            let colsContent = this.state.gameBoard[i] + this.state.gameBoard[i+3] + this.state.gameBoard[i+6];
            if(colsContent.match(/xxx|ooo/)){
                this.setState({winner:this.state.turn});
            }
        }

        {/* Check LEFT DIAGONAL to see if there's a winner */}
        let leftDiagonal = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
        if(leftDiagonal.match(/xxx|ooo/)){
            this.setState({winner:this.state.turn});
        }

        {/* Check RIGHT DIAGONAL to see if there's a winner */}
        let rightDiagonal = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
        if(rightDiagonal.match(/xxx|ooo/)){
            this.setState({winner:this.state.turn});
        }

        {/* Check if it's a Draw */}
        let movesDone = this.state.gameBoard.join('').replace(/ /g, '');
        if(movesDone.length === 9 && !this.state.winner){
          this.setState({winner: 'draw'});
        }
      }
    }
  }

  resetBoard(){
    this.setState({
      gameBoard: [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: 'x',
      winner: null,
      invalid: null
    })
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>React Exercise</h1>
          <Announcement
            winner={this.state.winner}
            invalid={this.state.invalid}
            turn={this.state.turn}
          />
          <ResetButton
            reset={this.resetBoard.bind(this)}
          />
        </div>
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
