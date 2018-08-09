// const initialState = {
//   firstName: "",
//   lastName: "",
//   location: "",
//   age: "",
//   yearsExperience: "",
//   classSubject: "",
//   picture: ""
// };

// const update_firstName = "update_firstName";
// const update_lastName = "update_lastName";
// const update_location = "update_location";
// const update_age = "update_age";
// const update_yearsExperience = "update_yearsExperience";
// const update_classSubject = "update_classSubject";
// const update_picture = "update_picture";

// function TutorReducer(state = initialState, action) {
//   console.log("REDUCER HIT: Action ->", action);
//   switch (action.type) {
//     case update_firstName:
//       return Object.assign({}, state, { firstName: action.payload });
//     // case `${update_firstName}_FULFILLED`:
//     //   return {
//     //     ...state,
//     //     firstName: action.payload.data
//     //   };
//     case update_lastName:
//       return Object.assign({}, state, { lastName: action.payload });
//     case update_location:
//       return Object.assign({}, state, { location: action.payload });
//     case update_age:
//       return Object.assign({}, state, { age: action.payload });
//     case update_yearsExperience:
//       return Object.assign({}, state, { yearsExperience: action.payload });
//     case update_classSubject:
//       return Object.assign({}, state, { classSubject: action.payload });
//     case update_picture:
//       return Object.assign({}, state, { picture: action.payload });
//     default:
//       return state;
//   }
// }

// export function updateFirstName(firstName) {
//   return {
//     type: update_firstName,
//     payload: firstName
//   };
// }

// export function updateLastName(lastName) {
//   return {
//     type: update_lastName,
//     payload: lastName
//   };
// }

// export function updateLocation(location) {
//   return {
//     type: update_location,
//     payload: location
//   };
// }

// export function updateAge(age) {
//   return {
//     type: update_age,
//     payload: age
//   };
// }

// export function updateYearsExperience(yearsExperience) {
//   return {
//     type: update_yearsExperience,
//     payload: yearsExperience
//   };
// }

// export function updateSubject(classSubject) {
//   return {
//     type: update_classSubject,
//     payload: classSubject
//   };
// }

// export function updatePicture(picture) {
//   return {
//     type: update_picture,
//     payload: picture
//   };
// }

// export default TutorReducer;
