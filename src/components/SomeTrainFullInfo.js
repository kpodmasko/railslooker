import React from "react"
import Closer from "./Closer"
import TrainGeneralInfo from "./TrainGeneralInfo"
import Infobord from "./TrainRoute"
import FontAwesome from "react-fontawesome"

const SomeTrainFullInfo = () => {
    return (
        <div className="SomeTrainFullInfo row">
                <div className="item item-10"></div>
                <div className="item item-2">
                    <Closer/>
                </div>
            <div className="item item-6">
                <TrainGeneralInfo/>
            </div>
            <div className="item item-6">
                <Infobord/>
            </div>
        </div>
    )
};

export default SomeTrainFullInfo;