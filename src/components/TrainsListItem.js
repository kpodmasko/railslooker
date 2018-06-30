import React, { Component } from "react"

class TrainsListItem extends Component{
    constructor(props) {
        super(props);

        this.state = {
            number: props.number,
            name: props.name,
            route: props.route,
            status: props.status
        }
    }

    render = () => {
        return (
            <div className="TrainsList__item row">
                <div className="item item-1">{this.state.number}</div>
                <div className="item item-5">{this.state.name}</div>
                <div className="item item-3">{this.state.route}</div>
                <div className="item item-3">{this.state.status}</div>
            </div>
        )
    }
};

export default TrainsListItem;