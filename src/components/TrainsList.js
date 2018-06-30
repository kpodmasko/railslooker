import React, { PureComponent } from "react"
import TrainsListItem from "./TrainsListItem.js"
import "../css/TrainsList.css"

class TrainsList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            number : "",
            name : "",
            route : "",
            status : ""
        }
    }


    render() {

        const trainsList = this.props.trains.map((train) => {
            return <TrainsListItem
                key = {train.number}
                {...train}
            />
        });

        const handleChange = (prop) => (event) => {
            const newState = {};
            newState[prop] = event.target.value;

            this.setState({
                ...this.state,
                ...newState
            });

            this.props.listWatcher({...this.state, ...newState});
        };

        return (
            <div className="TrainsList tac">
                <div className="TrainsList__header row">
                    <input
                        className="TrainsList__item item item-1"
                        placeholder="№..."
                        onChange = {handleChange("number")}
                    />
                    <input
                        className="TrainsList__item item item-5"
                        placeholder="Название..."
                        onChange = {handleChange("name")}
                    />
                    <input
                        className="TrainsList__item item item-3"
                        placeholder="Сообщение..."
                        onChange = {handleChange("route")}
                    />
                    <input
                        className="TrainsList__item item item-3"
                        placeholder="Состояние..."
                        onChange = {handleChange("status")}
                    />
                </div>
                {trainsList}
            </div>
        )
    }


}

export default TrainsList;