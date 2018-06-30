import React from "react"
// import { compose, withProps } from "recompose";
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap
// } from "react-google-maps";

// const TrainsMap = compose(
//     withProps({
//         googleMapURL:
//             "https://maps.googleapis.com/maps/api/js?key=AIzaSyBiTdL-onh2DsG2Jd85DofyfYU03Yp2Lfg&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
//         containerElement: <div style={{ height: `calc(100vh - 60px)`, width: '100%'}} />,
//         mapElement: <div style={{ height: `100%`, width: '100%' }} />
//     }),
//     withScriptjs,
//     withGoogleMap
// )(props => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//         {/*{props.isMarkerShown && (*/}
//             {/*<Marker position={{ lat: -34.397, lng: 150.644 }} />*/}
//         {/*)}*/}
//     </GoogleMap>
// ));

const TrainsMap = () => (<div style={{ height: `calc(100vh - 60px)`, width: '100%', backgroundColor :'#aaaaaa'}} />);


export default TrainsMap;
