import React from 'react';
import '../index.css';
import Board from '../components/Board'
import calculateWinner from './calculateWinner';


// Game component for rendering the tic-tac-toe game
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          // Array of 9 nulls representing empty squares
          squares: Array(9).fill(null),
          // stores the exact location of the move in format (col, row)
          location: null
        }
      ],
      // Current step in the game
      stepNumber: 0,
      // Boolean flag for determining which player's turn it is
      xIsNext: true
    };
  }

  // Handle a square click event
  handleClick(i) {
    // History up to current step
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // Current state
    const current = history[history.length - 1];
    // Copy of squares array from current state
    const squares = current.squares.slice();
    // If there is a winner or the square has already been filled
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const col = i % 3;
    const row = Math.floor(i / 3);

    // Fill the square with X or O
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: `(${col}, ${row})`
        }
      ]), // Append new state to history
      // Update step number
      stepNumber: history.length,
      // Toggle value of xIsNext
      xIsNext: !this.state.xIsNext
    });
  }

  // Jump to a specific step in the game
  jumpTo(step) {
    this.setState({
      // Update step number
      stepNumber: step,
      // Set xIsNext based on whether step is even or odd
      xIsNext: (step % 2) === 0
    });
  }


  resetGame() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
          location: null
        }
      ],
      stepNumber: 0,
      xIsNext: true
    });
  }

  // Render the tic-tac-toe game
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // Map history to list of buttons for navigating through moves
    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move} ${step.location}` :
        'Go to game start';
      return (
        <li key={move} className={move === this.state.stepNumber ? 'current-move' : ''}>
          <button onClick={() =>
            this.jumpTo(move)}
            className={move === this.state.stepNumber ? 'current-move text-black' : ''}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    // If there is a winner
    if (winner) {
      // Set status message
      status = "Player " + winner + " Won the game!";
    } else if (this.state.stepNumber === 9) {
      // if all squares are filled, draw
      status = "Draw";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-blue-500 font-bold text-9xl">
            TicTacToe!  
          </h1>
        </div>

        <div className="p-10 h-auto">
          {/* Player status */}
          <div className="text-blue-500 font-bold mr-20 flex items-center justify-center text-4xl">
            {status}
          </div>

          <div className="flex items-center justify-center p-5">

            {/* Reset Button  */}
            <div className="p-5">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white text-2xl p-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => this.resetGame()}>New Game
              </button>
            </div>

            {/* Game Board */}
            <div className="">
              <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>

            {/* Move History */}
            <div className="text-white bg-blue-500 px-8 ml-5 h-fit rounded ">
              <p className="text-2xl">Move history</p>
              <ol className="list-disc">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;