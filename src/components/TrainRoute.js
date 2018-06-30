import React from "react"
import "../css/TrainRoute.css"

const TrainRoute = () => {
    return (
        <div className="TrainRoute tac">
            <h2 className="TrainRoute__caption">Информация о маршруте</h2>
            <div className="TrainRoute__description">
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Состояние поезда
                    </div>
                    <div className="item item-6 tal">
                        В пути
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Текущие координаты
                    </div>
                    <div className="item item-6 tal">
                        15.15 , 15.15
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Место отправления
                    </div>
                    <div className="item item-6 tal">
                        Адлер
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Координаты отправления
                    </div>
                    <div className="item item-6 tal">
                        13.13, 13.13
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                       Дата отправления
                    </div>
                    <div className="item item-6 tal">
                        01.01.2001 15:15
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Место прибытия
                    </div>
                    <div className="item item-6 tal">
                        Адлер
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Координаты прибытия
                    </div>
                    <div className="item item-6 tal">
                        17.17, 17.17
                    </div>
                </div>
                <div className="row">
                    <div className="TrainRoute__headitem item item-6 tar">
                        Дата прибытия
                    </div>
                    <div className="item item-6 tal">
                        -
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainRoute;