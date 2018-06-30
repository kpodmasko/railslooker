import React, { Component } from "react"
import "../css/TrainRoute.css"


class TrainRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps
        });
    }

    render() {
        return (
            <div className="TrainRoute tac">
                <h2 className="TrainRoute__caption">Информация о маршруте</h2>
                <div className="TrainRoute__description">
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Состояние поезда
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.status) ? this.state.status : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Текущие координаты
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.curCoordinates) ? this.state.curCoordinates.join(",") : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Место отправления
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.dep) ? this.state.dep.place : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Координаты отправления
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.dep) ? this.state.dep.coordinates.join(",") : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Дата отправления
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.dep) ? this.state.dep.date : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Место прибытия
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.arr) ? this.state.arr.place : ""  }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Координаты прибытия
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.arr) ? this.state.arr.coordinates.join(",") : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainRoute__headitem item item-6 tar">
                            Дата прибытия
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.arr) ? this.state.arr.date : ""  }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainRoute;