import React from "react";
import { Link } from "react-router-dom";
import Googlemapstudent from "./GoogleMapsStudent";
import Googlemaptutor from "./GoogleMapsTutor";
// import "./GoogleMap.css";
import {
  Card,
  // Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Col
} from "reactstrap";
class GoogleMaps extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  render() {
    console.log(this.state.markers);
    return (
      <div className="google-map-link">
        {/* <Link to="/googlemapstudent">map of students</Link>
        <Link to="/googlemaptutor"> map of tutors</Link> */}
        <div>
          <CardDeck>
            <Col sm="6">
              <Card className="text-center">
                <CardBody>
                  <CardTitle style={{ color: "black" }}>
                    Tutors in the Area
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <CardText>
                    <Googlemaptutor />
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="text-center">
                <CardBody>
                  <CardTitle style={{ color: "black" }}>
                    Students in the Area
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <CardText>
                    <Googlemapstudent />
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default GoogleMaps;
