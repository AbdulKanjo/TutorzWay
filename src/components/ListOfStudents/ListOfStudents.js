import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import PlacesAutocomplete from "react-places-autocomplete";
import { getStudents } from "../../ducks/userReducer";
import "./ListOfStudents.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class ListOfStudents extends Component {
  constructor() {
    super();
    this.state = { isAdmin: false, filterString: "" };
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getStudents();
    this.getession();
  }
  getession() {
    axios.get("/api/me").then(response => {
      this.setState({ isAdmin: response.data.isadmin });
    });
  }
  handleDelete(student_id) {
    axios.delete(`/api/student/${student_id}`).then(() => {
      this.props.getStudents();
    });
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    console.log(this.props);

    let students = this.props.user
      .filter((e, i) => {
        console.log(e);
        return (e.first_name + " " + e.last_name)
          .toUpperCase()
          .includes(this.state.filterString.toUpperCase());
      })
      .map((e, i) => {
        return (
          <div key={i} className="each-box">
            <div>
              <img className="personal-img" src={e.picture} alt="img" />
              <div>{e.last_name} </div>
              <Link to={`/student/${e.first_name}`}>{e.first_name} </Link>
              <div>{e.age} </div>
              <div>{e.grade} </div>
              <div>{e.favorite_subjects} </div>
              <div>{e.description} </div>
              <div>{e.favorite_tutor} </div>
              <div>{e.location}</div>
              {this.state.isAdmin && (
                <Button
                  outline
                  color="danger"
                  onClick={id => this.handleDelete(e.student_id)}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        );
      });
    return (
      <div>
        <input
          className="search"
          placeholder="Search Tutors"
          onChange={e => this.handleChange(e.target.value)}
        />
        <div className="boxx">{students}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getStudents }
)(ListOfStudents);
