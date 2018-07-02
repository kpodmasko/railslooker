import React, { Component } from "react"
import Closer from "./Closer/index"
import TrainGeneralInfo from "./TrainGeneralInfo/index"
import TrainRoute from "./TrainRoute/index"

class SomeTrainFullInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        };
    }

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps
        });
    }

    render() {
        return (
            <div className="SomeTrainFullInfo row">
                <div className="col-xs-offset-10 col-xs-2">
                    <Closer closeFullInfo = { this.state.closeFullInfo }/>
                </div>
                <div className="col-xs-12 col-md-6">
                    <TrainGeneralInfo { ...this.state }/>
                </div>
                <div className="col-xs-12 col-md-6">
                    <TrainRoute { ...this.state }/>
                </div>
            </div>
        )
    }
}

export default SomeTrainFullInfo;