import React, { Component } from "react";
// import axios from "axios";
import "../ListOfClasses/ListOfclasses.css";
class ListOfClasses extends Component {
  render() {
    return (
      <div>
        <div className="containerr">
          <div className="avatar-flip">
            <img
              alt="clsd"
              src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
              height="150"
              width="150"
            />
            <img
              alt="asd"
              src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original"
              height="150"
              width="150"
            />
          </div>
          <h2>John Smith</h2>
          <h4>HOVER OVER CONTAINER</h4>
          <p>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Maecenas sed diam eget risus varius blandit sit amet non magna ip
            sum dolore.
          </p>
          <p>
            Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper
            nulla non metus auctor fringilla.
          </p>
        </div>
      </div>
    );
  }
}

export default ListOfClasses;
