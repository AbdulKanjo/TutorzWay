import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateFirstName,
  updateLastName,
  updateAge,
  updateGrade,
  updateSubject,
  updateLocation,
  updatePicture,
  updateCoordinates
} from "../../ducks/userReducer";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Card, CardImg, CardText, CardBody, Button } from "reactstrap";

class NewStudent extends Component {
  constructor() {
    super();
    this.state = { auth_id: "" };
  }
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    axios.get("/api/me").then(res => {
      this.setState({ auth_id: res.data });
    });
  }
  handelNewStudent(e) {
    console.log(this.props);
    axios
      .post("/api/newstudent", {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        age: this.props.age,
        grade: this.props.grade,
        favorite_subjects: this.props.favorite_subjects,
        location: this.props.location,
        picture: this.props.picture,
        coordinates: this.props.coordinates,
        auth_id: this.state.auth_id.auth_id
      })
      .then(() => {
        this.getUser();
      });
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
    console.log(this.state.auth_id.auth_id);

    return (
      <div>
        <div className="centering">
          <div className="new-tutor-input">
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
                            onChange={e =>
                              this.props.updateFirstName(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="texting">Last Name: </label>
                          <input
                            className="first_name"
                            // placeholder="Last Name"
                            onChange={e =>
                              this.props.updateLastName(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="texting">Age: </label>
                          <input
                            type="number"
                            id="exp-width"
                            min="0"
                            className="first_name"
                            onChange={e => this.props.updateAge(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="texting">Grade: </label>
                          <input
                            type="number"
                            id="exp-width"
                            min="0"
                            className="first_name"
                            onChange={e =>
                              this.props.updateGrade(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label className="texting">Favorite Subject: </label>
                          <input
                            className="first_name"
                            onChange={e =>
                              this.props.updateSubject(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="texting">Picture: </label>
                          <input
                            className="first_name"
                            onChange={e =>
                              this.props.updatePicture(e.target.value)
                            }
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
                        onClick={e => this.handelNewStudent(e)}
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
    age: state.age,
    grade: state.grade,
    favorite_subjects: state.favorite_subjects,
    location: state.location,
    picture: state.picture,
    coordinates: state.coordinates
  };
}

export default connect(
  mapStateToProps,
  {
    updateFirstName,
    updateLastName,
    updateAge,
    updateGrade,
    updateSubject,
    updateLocation,
    updatePicture,
    updateCoordinates
  }
)(NewStudent);
