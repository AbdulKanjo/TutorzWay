import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import "./NewTutor.css";
import {
  updateFirstName,
  updateLastName,
  updateLocation,
  updateAge,
  updateYearsExperience,
  updateSubjectTutor,
  updatePicture,
  updateCoordinates
} from "../../ducks/userReducer";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { Card, CardImg, CardText, CardBody, Button } from "reactstrap";

class NewTutor extends Component {
  constructor() {
    super();
    this.state = { auth_id: "", input: "" };
  }
  componentDidMount() {
    axios.get("/api/me").then(res => {
      this.setState({ auth_id: res.data });
    });
  }
  handelTutors(id) {
    console.log(this.props);

    axios
      .post("/api/newtutor", {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        location: this.props.location,
        age: this.props.age,
        years_experience: this.props.years_experience,
        class_subject: this.props.class_subject,
        picture: this.props.picture,
        coordinates: this.props.coordinates,
        auth_id: this.state.auth_id.auth_id
      })
      .then(swal("Welcome to TutorzWay!", "", "success"));
  }
  handleSelect = location => {
    geocodeByAddress(location)
      .then(location => getLatLng(location[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.props.updateCoordinates(latLng);
      })
      .catch(error => console.error("Error", error));
  };
  render() {
    const {
      updateFirstName,
      updateLastName,
      // updateLocation,
      updateAge,
      updateYearsExperience,
      updateSubjectTutor,
      updatePicture
    } = this.props;
    return (
      <div>
        {/* <Link to="/newstudent">New student</Link> */}
        <div className="centering">
          <div id="puff-in-center" className="new-tutor-input">
            <Card
              className="signup-card"
              body
              style={{
                borderColor: "#455E7A",
                padding: "0",
                width: "400px",
                borderRadius: "10px"
              }}
            >
              <div className="container">
                <CardImg
                  top
                  width="100vw"
                  src="http://www.humanengineers.com/wp-content/uploads/2017/09/learning-1.jpg"
                  alt="Card image cap"
                  style={{ borderRadius: "9px 9px 0 0" }}
                />
                <div className="centered-text-over-img">New Tutor</div>
              </div>
              <div>
                <CardBody>
                  <CardText>
                    <div className="form-pos">
                      <div>
                        <div>
                          <label className="texting">First Name: </label>
                          <input
                            className="first_name"
                            // placeholder="First Name"
                            onChange={e => updateFirstName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="texting">Last Name: </label>
                          <input
                            className="first_name"
                            // placeholder="Last Name"
                            onChange={e => updateLastName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="texting">Age: </label>
                          <input
                            type="number"
                            id="exp-width"
                            min="0"
                            className="first_name"
                            // placeholder="Age"
                            onChange={e => updateAge(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="texting">
                            Years of Experience:{" "}
                          </label>
                          <input
                            type="number"
                            className="first_namee"
                            // placeholder="Years Experience"
                            onChange={e =>
                              updateYearsExperience(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label className="texting">Subject: </label>
                          <input
                            id="input-sub"
                            className="first_name"
                            // placeholder="Subject"
                            onChange={e => updateSubjectTutor(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="texting">Picture: </label>
                          <input
                            id="input-sub"
                            className="first_name"
                            // placeholder="Picture"
                            onChange={e => updatePicture(e.target.value)}
                          />
                        </div>
                        <div>
                          <PlacesAutocomplete
                            value={this.props.location}
                            onChange={this.props.updateLocation}
                            onSelect={this.handleSelect}
                          >
                            {({
                              getInputProps,
                              suggestions,
                              getSuggestionItemProps,
                              loading
                            }) => (
                              <div>
                                <label className="texting">Location: </label>
                                <input
                                  id="input-subb"
                                  {...getInputProps({
                                    // placeholder: "Location ...",
                                    className: "first_name"
                                  })}
                                />
                                <div className="autocomplete-dropdown-container">
                                  {loading && <div>Loading...</div>}
                                  {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                      ? "suggestion-item--active"
                                      : "suggestion-item";
                                    const style = suggestion.active
                                      ? {
                                          backgroundColor: "#fafafa",
                                          cursor: "pointer",
                                          borderWidth: "0px 0px 1px 0px"
                                        }
                                      : {
                                          backgroundColor: "#ffffff",
                                          cursor: "pointer",
                                          borderWidth: "0px 0px 1px 0px"
                                        };
                                    return (
                                      <div
                                        {...getSuggestionItemProps(suggestion, {
                                          className,
                                          style
                                        })}
                                      >
                                        <span>{suggestion.description}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </PlacesAutocomplete>
                        </div>
                      </div>
                    </div>

                    <div className="new-tutor-btn">
                      <Button
                        outline
                        color="success"
                        className="button"
                        onClick={id => this.handelTutors(id)}
                      >
                        Complete
                      </Button>
                    </div>
                  </CardText>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    first_name: state.first_name,
    last_name: state.last_name,
    location: state.location,
    age: state.age,
    years_experience: state.years_experience,
    class_subject: state.class_subject,
    picture: state.picture,
    coordinates: state.coordinates
  };
}
export default connect(
  mapStateToProps,
  {
    updateFirstName,
    updateLastName,
    updateLocation,
    updateAge,
    updateYearsExperience,
    updateSubjectTutor,
    updatePicture,
    updateCoordinates
  }
)(NewTutor);
