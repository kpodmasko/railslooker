import React, { Component } from "react"
import TrainsListItem from "../TrainsListItem/index.js"
import "./TrainsList.css"

class TrainsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number : "",
            name : "",
            route : "",
            status : ""
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props
    }

    render() {
        const trainsList = this.props.trains.map((train) => {
            return <TrainsListItem
                clickHandler = { this.handleClick(train.number) }
                className = { (this.props.activeTrain === train.number) ? "active" : "" }
                key = {"list" + train.number}
                {...train}
            />
        });

        return (
            <div className="TrainsList tac">
                <div className="TrainsList__header row">
                    <input
                        className="TrainsList__item item item-1"
                        placeholder="№..."
                        onChange = {this.handleChange("number")}
                    />
                    <input
                        className="TrainsList__item item item-5"
                        placeholder="Название..."
                        onChange = {this.handleChange("name")}
                    />
                    <input
                        className="TrainsList__item item item-3"
                        placeholder="Сообщение..."
                        onChange = {this.handleChange("route")}
                    />
                    <input
                        className="TrainsList__item item item-3"
                        placeholder="Состояние..."
                        onChange = {this.handleChange("status")}
                    />
                </div>
                {trainsList}
            </div>
        )
    }

    handleClick = (number) => () => {
        this.props.activeTrainSwitcher(number);
    };

    handleChange = (prop) => (event) => {
        const newState = {};
        newState[prop] = event.target.value;

        this.setState({
            ...this.state,
            ...newState
        });
        this.props.listWatcher({...this.state, ...newState});
    };
}

export default TrainsList;