// import React, { Component } from "react";
// import axios from "axios";
// class ListOfClasses extends Component {
//   constructor() {
//     super();
//     this.state = {
//       classes: []
//     };
//   }
//   componentDidMount() {
//     this.getClasses();
//   }
//   getClasses() {
//     axios.get("/api/getclasses").then(res => {
//       this.setState({ classes: res.data });
//     });
//   }
//   render() {
//     let mappedClasses = this.state.classes.map((e, i) => {
//       return <div key={i}>{e.class_subject}</div>;
//     });
//     return <div> {mappedClasses} </div>;
//   }
// }

// export default ListOfClasses;

import React, { Component } from "react";
import axios from "axios";
import "../ListOfClasses/ListOfclasses.css";
class ListOfClasses extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     classes: []
  //   };
  // }
  // componentDidMount() {
  //   this.getClasses();
  // }
  // getClasses() {
  //   axios.get("/api/getclasses").then(res => {
  //     this.setState({ classes: res.data });
  //   });
  // }
  render() {
    // let mappedClasses = this.state.classes.map((e, i) => {
    //   return <div key={i}>{e.class_subject}</div>;
    // });
    return (
      <div>
        {/* <aside className="profile-card">
          <header>
            <img src="https://randomuser.me/api/portraits/men/99.jpg" />

            <h1>George Darkos</h1>

            <h2>- Full Stack Web Developer -</h2>
          </header>

          <div className="profile-bio">
            <p>Hello there!</p>
            <p>
              I am a full stack web developer. I mainly work with PHP, HTML,
              CSS, JS and WordPress.
              <br />I also play well with Photoshop, Corel Draw, After Effects
              and other cool stuff.
            </p>
          </div>

          <ul className="profile-social-links">
            <li>
              <a href="https://twitter.com/tutsplus">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
              </a>
            </li>

            <li>
              <a href="https://envato.com">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
              </a>
            </li>

            <li>
              <a href="https://codepen.io/tutsplus">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
              </a>
            </li>
          </ul>
        </aside>
        <aside className="profile-card">
          <header>
            <img src="https://randomuser.me/api/portraits/men/99.jpg" />

            <h1>George Darkos</h1>

            <h2>- Full Stack Web Developer -</h2>
          </header>

          <div className="profile-bio">
            <p>Hello there!</p>
            <p>
              I am a full stack web developer. I mainly work with PHP, HTML,
              CSS, JS and WordPress.
              <br />I also play well with Photoshop, Corel Draw, After Effects
              and other cool stuff.
            </p>
          </div>

          <ul className="profile-social-links">
            <li>
              <a href="https://twitter.com/tutsplus">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg" />
              </a>
            </li>

            <li>
              <a href="https://envato.com">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg" />
              </a>
            </li>

            <li>
              <a href="https://codepen.io/tutsplus">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg" />
              </a>
            </li>
          </ul>
        </aside> */}
        <div className="containerr">
          <div className="avatar-flip">
            <img
              src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
              height="150"
              width="150"
            />
            <img
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
