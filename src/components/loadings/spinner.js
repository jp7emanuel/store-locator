import React, { Component } from 'react';

const styles = {
  overlaySpin: {
    position: "absolute",
    zIndex: 99999999,
    width: "100%",
    height: "100%",
    display: "table",
    background: "rgba(0, 0, 0, 0.5)"
  },
  overlaySpinIcon: {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    color: 'white'
  }
}

class OverlaySpinner extends Component {
  render() {
    return (
      <div className="icon is-medium" style={styles.overlaySpin}>
        <i className="fa fa-spinner fa-spin" style={styles.overlaySpinIcon}></i>
      </div>
    );
  }
}

export default OverlaySpinner;
