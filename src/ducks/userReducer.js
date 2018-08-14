import axios from "axios";
const initialState = {
  user: [],
  didErr: false,
  first_name: "",
  last_name: "",
  location: "",
  age: "",
  grade: "",
  picture: "",
  years_experience: "",
  class_subject: "",
  favorite_subjects: "",
  coordinates: {}
};

const GET_STUDENTS = "GET_STUDENTS";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_GRADE = "UPDATE_GRADE";
const UPDATE_FAVORITE_SUBJECTS = "UPDATE_FAVORITE_SUBJECTS";
const UPDATE_LOCATION = "UPDATE_LOCATION";
const UPDATE_PICTURE = "UPDATE_PICTURE";
const UPDATE_YEARSEXPERIENCE = "UPDATE_YEARSEXPERIENCE";
const UPDATE_CLASS_SUBJECT = "UPDATE_CLASS_SUBJECT";
const UPDATE_COORDINATES = "UPDATE_COORDINATES";

export function getStudents() {
  return {
    type: GET_STUDENTS,
    payload: axios.get("/api/students")
  };
}
export function updateFirstName(first_name) {
  return {
    type: UPDATE_FIRST_NAME,
    payload: first_name
  };
}
export function updateLastName(last_name) {
  return {
    type: UPDATE_LAST_NAME,
    payload: last_name
  };
}
export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age
  };
}
export function updateGrade(grade) {
  return {
    type: UPDATE_GRADE,
    payload: grade
  };
}

export function updateSubject(favorite_subjects) {
  return {
    type: UPDATE_FAVORITE_SUBJECTS,
    payload: favorite_subjects
  };
}
export function updateSubjectTutor(class_subject) {
  return {
    type: UPDATE_CLASS_SUBJECT,
    payload: class_subject
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
}

export function updatePicture(picture) {
  return {
    type: UPDATE_PICTURE,
    payload: picture
  };
}
export function updateCoordinates(coordinates) {
  // console.log(`reducer___: ${coordinates}`);

  return {
    type: UPDATE_COORDINATES,
    payload: coordinates
  };
}
export function updateYearsExperience(years_experience) {
  return {
    type: UPDATE_YEARSEXPERIENCE,
    payload: years_experience
  };
}

export default function userReducer(state = initialState, action) {
  // console.log("REDUCER HIT: Action ->", action);
  switch (action.type) {
    case `${GET_STUDENTS}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case UPDATE_FIRST_NAME:
      return Object.assign({}, state, { first_name: action.payload });
    case UPDATE_LAST_NAME:
      return Object.assign({}, state, { last_name: action.payload });
    case UPDATE_LOCATION:
      return Object.assign({}, state, {
        location: action.payload
      });
    case UPDATE_COORDINATES:
      return Object.assign({}, state, { coordinates: action.payload });
    case UPDATE_AGE:
      return Object.assign({}, state, { age: action.payload });
    case UPDATE_GRADE:
      return Object.assign({}, state, { grade: action.payload });
    case UPDATE_PICTURE:
      return Object.assign({}, state, { picture: action.payload });
    case UPDATE_FAVORITE_SUBJECTS:
      return Object.assign({}, state, { favorite_subjects: action.payload });
    case UPDATE_YEARSEXPERIENCE:
      return Object.assign({}, state, { years_experience: action.payload });
    case UPDATE_CLASS_SUBJECT:
      return Object.assign({}, state, { class_subject: action.payload });
    default:
      return state;
  }
}
