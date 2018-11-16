import React from 'react';
import styles from './styles.css';
import Square from './Square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 'beginner',
      beginner: [1,2,3,4,5,6,7,8,9,10],
      intermediate: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      expert: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({level: event.target.value});
  }

  render() {
    return (<div>
      <select value={this.state.level} onChange={this.handleChange}>
        <option value='beginner'>Beginner</option>
        <option value='intermediate'>Intermediate</option>
        <option value='expert'>Expert</option>
      </select>
      <br/>
      <br/>
      {this.state[this.state.level].map((x, i) => <div className= {styles.row}>{this.state[this.state.level].map((x, j) => <Square coordinates={[i, j]}/>)}</div>)}
    </div>)
  }
}

export default Board;
