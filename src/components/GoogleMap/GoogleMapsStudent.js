import React from "react";
import Axios from "axios";
import "./GoogleMap.css";
// import { Link } from "react-router-dom";
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfL50ldRJHDZts4_QlDV_6f6cpET6OsnA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 31.9686, lng: -99.9018 }}>
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map((marker, i) => {
          return (
            <Marker
              key={i}
              position={{
                lat: marker.coordinates.lat,
                lng: marker.coordinates.lng
              }}
            />
          );
        })}
      </MarkerClusterer>
    </GoogleMap>
  );
});

class GoogleMaps extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  componentDidMount() {
    Axios.get("/api/studentmarker").then(res => {
      this.setState({ markers: res.data });
    });
  }

  render() {
    console.log(this.state.markers);
    return (
      <div className="google-student-tutor">
        <MapWithAMarkerClusterer markers={this.state.markers} />
      </div>
    );
  }
}

export default GoogleMaps;
