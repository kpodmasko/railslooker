import React, { Component } from "react"
import "../css/Closer.css"
// import FontAwesome from "react-fontawesome"

class Closer extends Component{
  render() {
      return (
          <div className="Closer tar">
          <span className="Closer__item" onClick={ this.props.closeFullInfo }>
                        {/*<FontAwesome*/}
              {/*name="rocket"*/}
              {/*size="2x"/>*/}
              Х
          </span>
          </div>
      )
  }
}

export default Closer;