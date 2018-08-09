import React, { Component } from "react";
import axios from "axios";
class ListOfClasses extends Component {
  constructor() {
    super();
    this.state = {
      classes: []
    };
  }
  componentDidMount() {
    this.getClasses();
  }
  getClasses() {
    axios.get("/api/getclasses").then(res => {
      this.setState({ classes: res.data });
    });
  }
  render() {
    let mappedClasses = this.state.classes.map((e, i) => {
      return <div key={i}>{e.class_subject}</div>;
    });
    return <div> {mappedClasses} </div>;
  }
}

export default ListOfClasses;
