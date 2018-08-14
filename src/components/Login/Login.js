import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
class Login extends Component {
  render() {
    return (
      <div className="login-card-position">
        <div className="card-login">
          <Card style={{ color: "transparent" }} className="text-center">
            <CardBody>
              <CardTitle id="login-text-who">ARE YOU A NEW?</CardTitle>
              <CardText>
                <button className="button-log">
                  <span>
                    <Link class="cool-link" to="/newtutor">
                      Tutor
                    </Link>
                  </span>
                </button>
              </CardText>
              <CardText>
                <button className="button-log">
                  <span>
                    <Link class="cool-link" to="/newstudent">
                      Student
                    </Link>
                  </span>
                </button>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
