import React, { Component } from "react"
import "./TrainGeneralInfo.css"

class TrainGeneralInfo extends Component{
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
            <div className="TrainGeneralInfo tac">
                <h2 className="TrainGeneralInfo__caption">Общая информация</h2>
                <div className="TrainGeneralInfo__description">
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem col-xs-6">
                            № поезда
                        </div>
                        <div className="col-xs-6">
                            { (this.state.number) ? this.state.number : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem col-xs-6 ">
                            Название поезда
                        </div>
                        <div className="col-xs-6 ">
                            { (this.state.name) ? this.state.name : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem col-xs-6 ">
                            Тип поезда
                        </div>
                        <div className="col-xs-6 ">
                            { (this.state.type) ? this.state.type : "" }
                        </div>
                    </div>
                    { (!this.state.freightOptions) ?
                        "" :
                        <div className="TrainGeneralInfo__typeSwitcher">
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem col-xs-6 ">
                                    Название груза
                                </div>
                                <div className="col-xs-6 ">
                                    { (this.state.freightOptions.cargo) ? this.state.freightOptions.cargo : "" }
                                </div>
                            </div>
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem col-xs-6 ">
                                    Вес груза
                                </div>
                                <div className="col-xs-6 ">
                                    { (this.state.freightOptions.cargoWeight) ? this.state.freightOptions.cargoWeight : "" }
                                </div>
                            </div>
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem col-xs-6 ">
                                    Единица измерения груза
                                </div>
                                <div className="col-xs-6 ">
                                    { (this.state.freightOptions.cargoUnit) ? this.state.freightOptions.cargoUnit : "" }
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem col-xs-6 ">
                            Количество вагонов
                        </div>
                        <div className="col-xs-6 ">
                            { (this.state.allCarriage) ? this.state.allCarriage : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem col-xs-6 ">
                            Количество заполненных вагонов
                        </div>
                        <div className="col-xs-6 ">
                            { (this.state.fullCarriage) ? this.state.allCarriage : "" }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainGeneralInfo;