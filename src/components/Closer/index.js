import React from "react"
import "./Closer.css"
import close from "../../img/close.png"

const Closer = props => (
          <div className="Closer tar">
              <img src={close} alt="X" className="Closer__item" onClick={ props.closeFullInfo }/>
          </div>
      );

export default Closer;