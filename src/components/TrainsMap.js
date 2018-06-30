/* eslint-disable no-undef */
import React, { Component } from "react"
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline
} from "react-google-maps";
import cargo from "../img/cargoTrain.png"
import people from "../img/peopleTrain.png"

class TrainsMap extends Component {

    render() {
        const markersList = this.props.trains.map((train) => {
            return <Marker
                key={ "map" + train.number }
                position={ {lat : train.curCoordinates[0], lng: train.curCoordinates[1]} }
                icon={ (train.type === "Грузовой") ? cargo : people }
            />
        });
        const polylinesList = this.props.trains.map((train) => {
            return <Polyline
                    key={ "mappoly" + train.number }
                    path={ [
                        {lat: train.dep.coordinates[0], lng: train.dep.coordinates[1]},
                        ...train.path.map( (coords) => ({lat: coords[0], lng: coords[1]}) ),
                        {lat: train.arr.coordinates[0], lng: train.arr.coordinates[1]}
                        ] }
                    options={ {
                        geodesic: true,
                        strokeColor: (this.props.activeTrain) ?
                            ( this.props.activeTrain.number === train.number) ? '#FF0000':'#000000'
                            :'#000000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    } }
            />
        });

        return <GoogleMap
            zoom={ (this.props.activeTrain) ? 8 : 5 }
            center={ (this.props.activeTrain) ?
                { lat: this.props.activeTrain.curCoordinates[0], lng: this.props.activeTrain.curCoordinates[1] } :
                { lat: 50.201643, lng: 39.974158}
            }>
            { markersList }
            { polylinesList }
        </GoogleMap>
    }
}


// const TrainsMap = () => (<div style={{ height: `calc(100vh - 60px)`, width: '100%', backgroundColor :'#aaaaaa'}} />);


export default compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTdL-onh2DsG2Jd85DofyfYU03Yp2Lfg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
        containerElement: <div style={{ height: `calc(100vh - 60px)`, width: '100%'}} />,
        mapElement: <div style={{ height: `100%`, width: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(TrainsMap);