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

  /*<div>
    <span className={ styles.square }>1</span>
    <span className={ styles.square }>2</span>
    <span className={ styles.square }>3</span>
  </div>
  <div className = {styles.row}>
    <span className={ styles.square }>4</span>
    <span className={ styles.square }>5</span>
    <span className={ styles.square }>6</span>
  </div>
  <div className = {styles.row}>
    <span className={ styles.square }>7</span>
    <span className={ styles.square }>8</span>
    <span className={ styles.square }>9</span>
  </div>*/

  render() {
    return (<div>
      {this.state.beginner.map((x, i) => <div className= {styles.row}>{this.state.beginner.map((x, j) => <Square coordinates={[i, j]}/>)}</div>)}
    </div>)
  }
}

export default Board;
