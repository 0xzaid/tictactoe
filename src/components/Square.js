// Function component for rendering a single square
import '../index.css';

function Square(props) {
  return (
    <button className="square text-blue-400 bg-gray-900 border-2 border-blue-500 rounded-1xl"
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;