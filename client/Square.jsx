import React from 'react';
import styles from './styles.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: props.coordinates,
      mine: ['o', 'o', 'o', 'x']
    }
  }

  render() {
    return (<div className={styles.square} onClick={() => {
        var x = document.getElementById(this.state.coordinates);
        if (x.style.display === "inline") {
          x.style.display = "none";
        } else {
          x.style.display = "inline";
        }
      }}>
      <div id={this.state.coordinates} className={styles.mine}>{this.state.mine[Math.floor(Math.random() * 4)]}</div>
    </div>)
  }
}

export default Square;
