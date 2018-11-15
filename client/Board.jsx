import React from 'react';
import styles from './styles.css';
import Square from './Square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "beginner",
      beginner: [1,2,3,4,5,6,7,8,9,10]
    }
  }

  render() {
    return (<div>
      {this.state.beginner.map((x, i) => <div className= {styles.row}>{this.state.beginner.map((x, j) => <Square coordinates={[i, j]}/>)}</div>)}
    </div>)
  }
}

export default Board;
