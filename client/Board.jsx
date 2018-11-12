import React from 'react';
import Styles from './styles.css'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Styles>
        <div id="square"></div>
      </Styles>
    )
  }
}

export default Board;
