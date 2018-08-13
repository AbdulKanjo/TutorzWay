import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ListOfTutors.css";
import StarRatingComponent from "react-star-rating-component";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

class ListOfTutorsBySubject extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      tutors: [],
      ids: [],
      rating: 0,
      dropdownOpen: false,
      isAdmin: false,
      filterString: ""
    };
  }
  componentDidMount() {
    this.getTutors();
    this.getession();
  }
  getTutors() {
    axios.get("/api/gettutorsbysubject").then(res => {
      this.setState({ tutors: res.data });
      let tutorsPromises = this.state.tutors.map(tutor => {
        return axios.get(`/api/getrating/${tutor.tutor_id}`);
      });
      // console.log(tutorsPromises);
      Promise.all(tutorsPromises)
        .then(response => {
          // console.log(response);
          const tutorsWithRatings = response.map((e, i) => {
            // console.log(e.data || "NO AVERAGE");
            // return (this.state.tutors[i].rating = e.data || "no rating");
            return { ...this.state.tutors[i], rating: e.data || "no rating" };
          });
          this.setState({ tutors: tutorsWithRatings });
        })
        .catch(console.error);
    });
  }
  getession() {
    axios.get("/api/me").then(response => {
      this.setState({ isAdmin: response.data.isadmin });
      // console.log(response);
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }
  handleDelete(id) {
    axios.delete(`/api/tutors/${id}`).then(() => {
      this.getTutors();
    });
  }
  render() {
    let search = this.state.tutors
      .filter((e, i) => {
        console.log(e);
        return e.class_subject
          .toUpperCase()
          .includes(this.state.filterString.toUpperCase());
      })
      .map((e, i) => {
        console.log("EACH TUTOR!!!", e);

        return (
          <div key={i} className="each-box-tutor">
            <aside className="profile-card">
              <header>
                {e.first_name}
                <img
                  src={e.picture}
                  // style={{ height: "200px" }}
                  height="200p"
                  width="200px"
                />
                <h1>{e.last_name}</h1>
                <h2 className="padding-for-list">Tutor</h2>
              </header>

              <div className="profile-bio">
                <p className="margin-link-know">
                  Get to know me more
                  <Link to={`/tutor/${e.first_name}`}> Here! </Link>
                </p>
                <p>
                  <div>{e.location} </div>
                  <div>Subject: {e.class_subject}</div>
                  <div>Age: {e.age} </div>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    starColor={"#F7C744"}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={Number(e.rating)}
                  />
                </p>
              </div>

              <ul className="profile-social-links">
                <li className="each-el-on-list">
                  <a href="https://accounts.google.com/signin/v2/sl/pwd?service=fusiontables&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <img src="https://image.flaticon.com/icons/png/512/281/281769.png" />
                  </a>
                </li>

                <li className="each-el-on-list">
                  <a href="https://github.com/">
                    <img src="https://image.flaticon.com/icons/svg/270/270798.svg" />
                  </a>
                </li>

                <li className="each-el-on-list">${e.pricehour}</li>
              </ul>
            </aside>
            <div className="delete-btn">
              {this.state.isAdmin && (
                <Button
                  outline
                  color="danger"
                  onClick={id => this.handleDelete(e.tutor_id)}
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
        <div className="search-tutors">
          <input
            className="search"
            placeholder="Search By subject"
            onChange={e => this.handleChange(e.target.value)}
          />
        </div>
        <div className="filter">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color="primary">
              Filters
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Filters</DropdownItem>
              <DropdownItem>
                <Link id="filter-text" to="/gettutorsbyage">
                  Filter By Age
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem id="filter-text">
                <Link id="filter-text" to="/gettutorsbysubject">
                  Filter By Subject
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem id="filter-text">
                <Link id="filter-text" to="/gettutorsbyprice">
                  Price (Low to High)
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>

        <div className="box-tutors">{search}</div>
      </div>
    );
  }
}
export default ListOfTutorsBySubject;
