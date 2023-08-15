import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="mt-10 flex w-full items-center justify-center">
        <h1 className="text-blue-500 font-bold text-9xl animate-bounce select-none">
          TicTacToe!
        </h1>
      </div>
    );
  }
}

export default Header;