import React, { Component } from "react"
import TrainsListItem from "./TrainsListItem.js"
import "../css/TrainsList.css"

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

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props
    }

    render() {
        const trainsList = this.props.trains.map((train) => {
            return <TrainsListItem
                clickHandler = { this.handleClick(train.number) }
                className = { (this.props.activeTrain === train.number) ? "active" : "" }
                key = {train.number}
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

    handleClick = (number) => (event) => {
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