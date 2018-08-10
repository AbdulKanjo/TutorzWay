import React, { Component } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import Checkout from "../CheckOutStripe/CheckOutStripe";
import ContactForm from "../ContactForm/ContactForm";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
import Chat from "../Chat/Chat";
import { ButtonDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "./Tutor.css";
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const MapWithAMarker = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfL50ldRJHDZts4_QlDV_6f6cpET6OsnA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `180px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),

  withScriptjs,
  withGoogleMap
)(props => {
  console.log(props);

  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: props.markers.lat, lng: props.markers.lng }}
    >
      <Marker position={{ lat: props.markers.lat, lng: props.markers.lng }} />
    </GoogleMap>
  );
});
class Tutor extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      tutor: [],
      currentTutor: "",
      rating: 1,
      review: "",
      userreviews: [],
      dropdownOpen: false,
      hasAccount: false,
      username: ""
    };
  }

  componentDidMount() {
    this.getTutors();
    this.getession();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getession() {
    axios.get("/api/me").then(response => {
      console.log(response);
      this.setState({
        hasAccount: response.data.hasaccount,
        username: response.data.name
      });
      // console.log(response);
    });
  }

  getTutors() {
    axios
      .get("/api/tutors")
      .then(res => {
        this.setState({ tutor: res.data });
      })
      .then(afterwards => {
        let currentTutor =
          this.state.tutor.find(
            c => c.first_name === this.props.match.params.first_name
          ) || false;
        this.setState(
          { currentTutor: currentTutor },
          this.getReviews(currentTutor.tutor_id)
        );
        console.log(currentTutor.tutor_id);
      });
  }

  onStarClick(nextValue, prevValue, name) {
    console.log("current tutor ID=>>>>", this.state.currentTutor.tutor_id);
    axios.post("/api/newtutorrating", {
      rating: nextValue,
      tutor_id: this.state.currentTutor.tutor_id
    });
    this.setState({ rating: nextValue });
  }
  getReviews(id) {
    console.log("this is for get ", id);
    axios.get(`/api/getreviews/${id}`).then(res => {
      this.setState({ userreviews: res.data });
      // console.log(res);
    });
  }
  handleDelete(id) {
    axios.delete(`/api/deletetutorreview/${id}`).then(() => {
      this.getReviews(this.state.currentTutor.tutor_id);
    });
  }

  updateReview(newReview) {
    this.setState({ review: newReview });
  }
  handleReview(id) {
    console.log(id);
    let { review, username } = this.state;
    console.log(username);

    axios
      .post("/api/newtutorreview", {
        review: review,
        tutor_id: this.state.currentTutor.tutor_id,
        username: username
      })
      .then(() => {
        this.setState({
          review: ""
        });
      })
      .then(() => this.getReviews(id));
  }

  render() {
    console.log(this.state.hasAccount);
    let mappedReviews = this.state.userreviews.map((e, i) => {
      console.log(this.state.userreviews);
      console.log(e);
      return (
        <div key={i}>
          <div>{e.username}:</div>

          <div className="review-padd">
            {e.review}
            {this.state.username === e.username && (
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => this.handleDelete(e.id)}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          <hr className="hr-color-tutor" />
        </div>
      );
    });
    let { currentTutor } = this.state;
    return (
      <div>
        {currentTutor ? (
          <div>
            <div>
              <div className="first-part-tutor">
                <div>
                  <Col>
                    <Card
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                        // flexDirection: "unset"
                      }}
                    >
                      <CardImg
                        style={{ margin: "auto" }}
                        top
                        className="tutor-page-img"
                        width="50%"
                        src={currentTutor.picture}
                        alt="Card image cap"
                      />
                      {/* <Col xs={6} md={4}>
                        <Image src="/thumbnail.png" circle />
                      </Col> */}
                      <CardBody style={{ textAlign: "center" }}>
                        <CardTitle>
                          {" "}
                          {currentTutor.first_name} {currentTutor.last_name}
                        </CardTitle>

                        <CardText>
                          <div>
                            Experience: {currentTutor.years_experience} years{" "}
                          </div>
                          <div>{currentTutor.location}</div>

                          <div className="map-card-tutor">
                            <Card
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                              }}
                            >
                              <CardBody style={{ textAlign: "center" }}>
                                <CardText>
                                  <MapWithAMarker
                                    markers={
                                      this.state.currentTutor.coordinates
                                    }
                                  />
                                </CardText>
                              </CardBody>
                            </Card>
                          </div>
                          <Checkout
                            name={"Make A Payment for Tutor"}
                            description={"Hour rate"}
                            amount={currentTutor.pricehour}
                            button_text="Buy Now"
                          />
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
              <div className="sec-part-tutor">
                <div>
                  <Col>
                    <Card
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <CardBody>
                        <CardTitle style={{ textAlign: "center" }}>
                          Reviews
                        </CardTitle>

                        <CardText>
                          {this.state.hasAccount ? (
                            <div>
                              <div>
                                <input
                                  className="Review"
                                  placeholder="Review"
                                  value={this.state.review}
                                  onChange={e =>
                                    this.updateReview(e.target.value)
                                  }
                                />
                              </div>
                              <div>
                                <Button
                                  outline
                                  color="success"
                                  className="button"
                                  onClick={() =>
                                    this.handleReview(
                                      this.state.currentTutor.tutor_id
                                    )
                                  }
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p>Please Login To Leave a Review</p>
                          )}
                          <div style={{ textAlign: "center" }}>
                            <StarRatingComponent
                              name="rate1"
                              starCount={5}
                              starColor={"#F7C744"}
                              value={this.state.rating}
                              onStarClick={this.onStarClick.bind(this)}
                            />
                          </div>
                          <div>
                            <div style={{ textAlign: "center" }}>
                              Student reviews <hr className="hr-color-tutor" />
                            </div>
                            {mappedReviews}{" "}
                          </div>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
                <div>
                  <Col sm="20">
                    <Card
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <CardText>
                          <ContactForm />
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
            </div>
            <div className="chat-but">
              <div>
                <ButtonDropdown
                  fixed
                  direction="up"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle>
                    <img
                      className="chat-svg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/2000px-Circle-icons-chat.svg.png"
                    />
                  </DropdownToggle>
                  <DropdownMenu right fixed className="dropdownmenu">
                    <div className="chatbox">
                      <Chat className="chat-vis" />
                    </div>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </div>
          </div>
        ) : (
          <h1>Sorry, item not found</h1>
        )}
      </div>
    );
  }
}

export default Tutor;
