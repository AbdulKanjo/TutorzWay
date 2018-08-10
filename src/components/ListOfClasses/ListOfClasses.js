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
      </div>
    );
  }
}

export default ListOfClasses;
