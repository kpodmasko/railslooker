import React, { Component } from "react"
import TrainsList from "./TrainsList"
import TrainsMap from "./TrainsMap"
import SomeTrainFullInfo from "./SomeTrainFullInfo"
import "../css/App.css"
import trains from "./db"

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            activeTrain : null,
            trainsList : trains
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps === this.props) {
            return false;
        }
    }

    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="item item-6">
                        <TrainsMap isMarkerShown/>
                    </div>
                    <div className="item item-6">
                        <TrainsList
                            trains = { this.state.trainsList }
                            activeTrainSwitcher = { this.changeActiveTrain }
                            listWatcher = { this.changeTrainsList }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="item item-12">
                        <SomeTrainFullInfo/>
                    </div>
                </div>
            </div>
        )
    }

    changeActiveTrain = (newActiveNumber) => {
        this.setState({
            activeTrain : newActiveNumber
        });
    };

    changeTrainsList = (fields) => {
        let newTrainsList = [];

        if (!fields.name &&
            !fields.number &&
            !fields.route &&
            !fields.status) {
            newTrainsList = trains;
        }else {
            for (let train of trains) {
                if (this.checkOneTrain(train, fields)) {
                    newTrainsList.push(train);
                }
            }
        }

        this.setState({
            trainsList: newTrainsList
        })
    };

    checkOneTrain = (train, fields) => {
        for (let field of Object.keys(fields)) {
            if (!fields[field]) {
                continue;
            }

            if (train[field].indexOf(fields[field]) === -1) {
                return false;
            }
        }
        return true;
    }
}

export default App;