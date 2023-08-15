import React from 'react';
import '../index.css';
import Square from './Square';

// Board component for rendering the tic-tac-toe board
class Board extends React.Component {

  // Render a single square
  renderSquare(i) {
    return (
      <Square
        // value of the square from parent component's state
        value={this.props.squares[i]}
        // callback for handling square click event
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // Render the tic-tac-toe board
  render() {

    let rows = [];
    for (let i = 0; i < 3; i++) {
      let cols = [];
      for (let j = 0; j < 3; j++) {
        cols.push(this.renderSquare(i * 3 + j));
      }
      rows.push(<div className='board-row'>{cols}</div>);
    }

    return (
      <div className="">{rows}</div>
    );
  }
}

export default Board;