import React from "react";
import { Switch, Route } from "react-router-dom";

import GoogleMaps from "./components/GoogleMap/GoogleMap";
import Home from "./components/Home/Home";
import ListOfClasses from "./components/ListOfClasses/ListOfClasses";
import ListOfTutors from "./components/ListOfTutors/ListOfTutors";
import ListOfStudents from "./components/ListOfStudents/ListOfStudents";
import NewStudent from "./components/NewStudent/NewStudent";
import NewTutor from "./components/NewTutor/NewTutor";
import Login from "./components/Login/Login";
import Student from "./components/Student/Student";
import Tutor from "./components/Tutor/Tutor";
import GoogleMapsStudent from "./components/GoogleMap/GoogleMapsStudent";
import GoogleMapsTutor from "./components/GoogleMap/GoogleMapsTutor";
import ListOfTutorsByAge from "./components/ListOfTutors/ListOfTutorsByAge";
import ListOfTutorsBySubject from "./components/ListOfTutors/ListOfTutorsBySubject";
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/googlemap" component={GoogleMaps} />
    <Route path="/listofclasses" component={ListOfClasses} />
    <Route path="/listoftutors" component={ListOfTutors} />
    <Route path="/listofstudents" component={ListOfStudents} />
    <Route path="/login" component={Login} />
    <Route path="/newstudent" component={NewStudent} />
    <Route path="/newtutor" component={NewTutor} />
    <Route path="/student/:first_name" component={Student} />
    <Route path="/tutor/:first_name" component={Tutor} />
    <Route path="/googlemapstudent" component={GoogleMapsStudent} />
    <Route path="/googlemaptutor" component={GoogleMapsTutor} />
    <Route path="/gettutorsbyage" component={ListOfTutorsByAge} />
    <Route path="/gettutorsbysubject" component={ListOfTutorsBySubject} />
  </Switch>
);
