import React from 'react';
import styles from './styles.css'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: props.coordinates,
      mine: ['o', 'o', 'o', 'x'][Math.floor(Math.random() * 4)]
    }
  }

  showNumber(coor, set) {
    //console.log(this.state.coordinates, document.getElementById(this.state.coordinates).title);
    var count = 0;
    if (document.getElementById(coor).title === 'o') {
      // 1
      if (document.getElementById([
        coor[0] - 1,
        coor[1] - 1
      ]) && document.getElementById([
        coor[0] - 1,
        coor[1] - 1
      ]).title === 'x') {
        count++;
      }
      // 2
      if (document.getElementById([
        coor[0] - 1,
        coor[1]
      ]) && document.getElementById([
        coor[0] - 1,
        coor[1]
      ]).title === 'x') {
        count++;
      }
      //3
      if (document.getElementById([
        coor[0] - 1,
        coor[1] + 1
      ]) && document.getElementById([
        coor[0] - 1,
        coor[1] + 1
      ]).title === 'x') {
        count++;
      }
      //4
      if (document.getElementById([
        coor[0], coor[1] - 1
      ]) && document.getElementById([
        coor[0], coor[1] - 1
      ]).title === 'x') {
        count++;
      }
      //5
      if (document.getElementById([
        coor[0], coor[1] + 1
      ]) && document.getElementById([
        coor[0], coor[1] + 1
      ]).title === 'x') {
        count++;
      }
      //6
      if (document.getElementById([
        coor[0] + 1,
        coor[1] - 1
      ]) && document.getElementById([
        coor[0] + 1,
        coor[1] - 1
      ]).title === 'x') {
        count++;
      }
      //7
      if (document.getElementById([
        coor[0] + 1,
        coor[1]
      ]) && document.getElementById([
        coor[0] + 1,
        coor[1]
      ]).title === 'x') {
        count++;
      }
      //8
      if (document.getElementById([
        coor[0] + 1,
        coor[1] + 1
      ]) && document.getElementById([
        coor[0] + 1,
        coor[1] + 1
      ]).title === 'x') {
        count++;
      }
      if (count > 0) {
        this.setState({mine: count})
        console.log(coor)
      } else {
        console.log('zero')
        // if 0 mines around reveal spaces around
        // var oldSetSize = set.size;
        // var newSet = set.add(coor.join());
        // console.log('now', oldSetSize, newSet.size)
        //  1
        // if (document.getElementById([
        //   coor[0] - 1,
        //   coor[1] - 1
        // ]) && document.getElementById([
        //   coor[0] - 1,
        //   coor[1] - 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] - 1,
        //       coor[1] - 1
        //     ], newSet)
        //   }
        // }
        //  2
        // if (document.getElementById([
        //   coor[0] - 1,
        //   coor[1]
        // ]) && document.getElementById([
        //   coor[0] - 1,
        //   coor[1]
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] - 1,
        //       coor[1]
        //     ], newSet)
        //   }
        // }
        // 3
        // if (document.getElementById([
        //   coor[0] - 1,
        //   coor[1] + 1
        // ]) && document.getElementById([
        //   coor[0] - 1,
        //   coor[1] + 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] - 1,
        //       coor[1] + 1
        //     ], newSet)
        //   }
        // }
        // 4
        // if (document.getElementById([
        //   coor[0], coor[1] - 1
        // ]) && document.getElementById([
        //   coor[0], coor[1] - 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0], coor[1] - 1
        //     ], newSet)
        //   }
        // }
        // 5
        // if (document.getElementById([
        //   coor[0], coor[1] + 1
        // ]) && document.getElementById([
        //   coor[0], coor[1] + 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0], coor[1] + 1
        //     ], newSet)
        //   }
        // }
        // 6
        // if (document.getElementById([
        //   coor[0] + 1,
        //   coor[1] - 1
        // ]) && document.getElementById([
        //   coor[0] + 1,
        //   coor[1] - 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] + 1,
        //       coor[1] - 1
        //     ], newSet)
        //   }
        // }
        // 7
        // if (document.getElementById([
        //   coor[0] + 1,
        //   coor[1]
        // ]) && document.getElementById([
        //   coor[0] + 1,
        //   coor[1]
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] + 1,
        //       coor[1]
        //     ], newSet)
        //   }
        // }
        // 8
        // if (document.getElementById([
        //   coor[0] + 1,
        //   coor[1] + 1
        // ]) && document.getElementById([
        //   coor[0] + 1,
        //   coor[1] + 1
        // ]).title !== 'x') {
        //   if (newSet.size > oldSetSize) {
        //     this.showNumber([
        //       coor[0] + 1,
        //       coor[1] + 1
        //     ], newSet)
        //   }
        // }
      }
    }
  }

  render() {
    return (<div className={styles.square} onClick={() => {
        this.showNumber(this.state.coordinates);
        var x = document.getElementById(this.state.coordinates);
        if (x.style.display === "inline") {
          x.style.display = "none";
        } else {
          x.style.display = "inline";
        }
      }}>
      <div id={this.state.coordinates} className={styles.mine} title={this.state.mine}>{this.state.mine}</div>
    </div>)
  }
}

export default Square;
