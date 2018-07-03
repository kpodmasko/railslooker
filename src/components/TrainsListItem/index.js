import React, { Component } from "react"
import "./TrainsListItem.css"

class TrainsListItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props
    }

    render() {
        return (
            <div className={ "TrainsList__item col-xs-12 " + this.props.className } onClick={ this.props.clickHandler }>
                <div className="col-xs-2" title={ this.props.number }>{ this.props.number }</div>
                <div className="col-xs-offset-1 col-xs-3" title={ this.props.name }>{ this.props.name }</div>
                <div className="col-xs-offset-1 col-xs-2" title={ this.props.route }>{ this.props.route }</div>
                <div className="col-xs-offset-1 col-xs-2" title={ this.props.status }>{ this.props.status }</div>
            </div>
        )
    }
}

export default TrainsListItem;