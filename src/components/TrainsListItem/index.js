import React, { Component } from "react"
import "./TrainsListItem.css"

class TrainsListItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props
    }

    render() {
        return (
            <div className={ "TrainsList__item row " + this.props.className } onClick={ this.props.clickHandler }>
                <div className="item item-1">{ this.props.number }</div>
                <div className="item item-5">{ this.props.name }</div>
                <div className="item item-3">{ this.props.route }</div>
                <div className="item item-3">{ this.props.status }</div>
            </div>
        )
    }
}

export default TrainsListItem;