import React from 'react';
import styles from './styles.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * Math.floor(6)),
      mine: false
    }
  }

  render() {
    return (<span className={styles.square}>{this.state.number}</span>)
  }
}

export default Square;
