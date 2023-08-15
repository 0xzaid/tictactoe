import React from "react";

class Footer extends React.Component{
  render() {
    return (
      <footer className="right-7 footer footer-center w-full p-4 text-white text-lg fixed bottom-0">
        <div className="text-center">
          <p>Made with <span className="text-red-500">♥</span> by <a className="font-bold text-blue-400 hover:text-blue-300" href="https://github.com/0xzaid">0xzaid</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;