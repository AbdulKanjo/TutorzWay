import React from "react";

import Googlemapstudent from "./GoogleMapsStudent";
import Googlemaptutor from "./GoogleMapsTutor";

import { Card, CardTitle, CardText, CardDeck, CardBody, Col } from "reactstrap";
class GoogleMaps extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  render() {
    return (
      <div className="google-map-link">
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
