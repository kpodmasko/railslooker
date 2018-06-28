import React from "react"
import TrainsList from "./TrainsList"
import TrainsMap from "./TrainsMap"
import "../sass/App.scss"

const App = () => {
    return (
        <div className="App container">
            <div className="row">
                <div className="item-6">
                    <TrainsMap/>
                </div>
                <div className="item-6">
                    <TrainsList/>
                </div>
            </div>
        </div>
    )
};

export default App;