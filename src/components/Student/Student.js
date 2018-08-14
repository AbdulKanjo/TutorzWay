import React, { Component } from "react";
import { getStudents } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Student extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    let student =
      this.props.user.find(
        c => c.first_name === this.props.match.params.first_name
      ) || false;

    return (
      <div>
        {student ? (
          <div>
            <img className="personal-img" src={student.picture} alt="img" />
            <div>{student.first_name}</div>
            <div>{student.age} </div>
            <div>{student.grade} </div>
            <div>{student.favorite_subjects} </div>
            <div>{student.description} </div>
            <div>{student.favorite_tutor} </div>
            <div>{student.location}</div>
          </div>
        ) : (
          <h1>Sorry, item not found</h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getStudents }
)(Student);
