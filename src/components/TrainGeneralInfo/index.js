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
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            № поезда
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.number) ? this.state.number : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Название поезда
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.name) ? this.state.name : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Тип поезда
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.type) ? this.state.type : "" }
                        </div>
                    </div>
                    { (!this.state.freightOptions) ?
                        "" :
                        <div className="TrainGeneralInfo__typeSwitcher">
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem item item-6 tar">
                                    Название груза
                                </div>
                                <div className="item item-6 tal">
                                    { (this.state.freightOptions.cargo) ? this.state.freightOptions.cargo : "" }
                                </div>
                            </div>
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem item item-6 tar">
                                    Вес груза
                                </div>
                                <div className="item item-6 tal">
                                    { (this.state.freightOptions.cargoWeight) ? this.state.freightOptions.cargoWeight : "" }
                                </div>
                            </div>
                            <div className="row">
                                <div className="TrainGeneralInfo__headitem item item-6 tar">
                                    Единица измерения груза
                                </div>
                                <div className="item item-6 tal">
                                    { (this.state.freightOptions.cargoUnit) ? this.state.freightOptions.cargoUnit : "" }
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Количество вагонов
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.allCarriage) ? this.state.allCarriage : "" }
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Количество заполненных вагонов
                        </div>
                        <div className="item item-6 tal">
                            { (this.state.fullCarriage) ? this.state.allCarriage : "" }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainGeneralInfo;