import React from 'react';
import styles from './styles.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * Math.floor(2)),
      mine: false
    }
  }

  render() {
    return (<span className={styles.square} onClick={() => {
        var x = document.getElementById("number");
        if (x.style.display === "none") {
          x.style.display = "inline";
        } else {
          x.style.display = "none";
        }
      }}>
      <span id="number" className={styles.mine}>{this.state.number}</span>
    </span>)
  }
}

export default Square;
