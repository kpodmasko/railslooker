import React from "react"
import "../css/TrainGeneralInfo.css"

const TrainGeneralInfo = () => {
    return (
        <div className="TrainGeneralInfo tac">
            <h2 className="TrainGeneralInfo__caption">Общая ифнормация</h2>
            <div className="TrainGeneralInfo__description">
                <div className="row">
                    <div className="TrainGeneralInfo__headitem item item-6 tar">
                        № поезда
                    </div>
                    <div className="item item-6 tal">
                        1
                    </div>
                </div>
                <div className="row">
                    <div className="TrainGeneralInfo__headitem item item-6 tar">
                        Название поезда
                    </div>
                    <div className="item item-6 tal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad consequatur eius error est eveniet, facere, incidunt ipsam nam natus nobis sapiente ullam ut! Aliquid asperiores consequatur dolores illum ipsa.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa, ducimus earum facere libero nemo odio quibusdam soluta unde veritatis! Aliquam dicta dolorem expedita fuga iure, molestias odit sit veniam.
                    </div>
                </div>
                <div className="row">
                    <div className="TrainGeneralInfo__headitem item item-6 tar">
                        Тип поезда
                    </div>
                    <div className="item item-6 tal">
                        Грузовой
                    </div>
                </div>
                <div className="TrainGeneralInfo__typeSwitcher">
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Название груза
                        </div>
                        <div className="item item-6 tal">
                            Смола
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Вес груза
                        </div>
                        <div className="item item-6 tal">
                            5000
                        </div>
                    </div>
                    <div className="row">
                        <div className="TrainGeneralInfo__headitem item item-6 tar">
                            Единица измерения груза
                        </div>
                        <div className="item item-6 tal">
                            кг.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="TrainGeneralInfo__headitem item item-6 tar">
                        Количество вагонов
                    </div>
                    <div className="item item-6 tal">
                        100
                    </div>
                </div>
                <div className="row">
                    <div className="TrainGeneralInfo__headitem item item-6 tar">
                        Количество заполненных вагонов
                    </div>
                    <div className="item item-6 tal">
                        100
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainGeneralInfo;