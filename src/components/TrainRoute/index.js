import React, { Component } from "react"
import "./TrainRoute.css"


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
        const refactorCoords = coords => {

            if (!coords || !coords.length ) {
                return "";
            }

            let lat = coords[0];
            let lng = coords[1];

            return [ Math.floor(lat * 100000) / 100000, Math.floor(lng * 100000) / 100000 ].join(", ");
        };

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
                            { refactorCoords(this.state.curCoordinates) }
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
                            { (this.state.dep) ? refactorCoords(this.state.dep.coordinates) : ""  }
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
                            { (this.state.arr) ? refactorCoords(this.state.arr.coordinates) : ""  }
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