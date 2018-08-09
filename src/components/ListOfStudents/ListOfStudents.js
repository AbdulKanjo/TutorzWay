import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import PlacesAutocomplete from "react-places-autocomplete";
import { getStudents } from "../../ducks/userReducer";
import "./ListOfStudents.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class ListOfStudents extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getStudents();
  }

  handleDelete(student_id) {
    axios.delete(`/api/student/${student_id}`).then(() => {
      this.props.getStudents();
    });
  }

  render() {
    console.log(this.props);

    let students = this.props.user.map((e, i) => {
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
            <Button
              outline
              color="danger"
              onClick={id => this.handleDelete(e.student_id)}
            >
              Delete
            </Button>
          </div>
        </div>
      );
    });
    return <div className="boxx">{students}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getStudents }
)(ListOfStudents);
