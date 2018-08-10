import React, { Component } from "react";
import Googlemaptutor from "../GoogleMap/GoogleMapsTutor";
import Fade from "react-reveal/Fade";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  // Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  Col,
  // CardSubtitle,
  CardBody
} from "reactstrap";
import "./Home.css";
import Axios from "axios";
// import picture from "./newpic.jpeg";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

const items = [
  {
    src:
      "http://neatoday.org/wp-content/uploads/2015/06/what_is_creative_teaching-e1433788418645.jpeg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src:
      "https://www.bringyourbible.org/wp-content/uploads/2017/02/teacher2.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  },
  {
    src:
      "https://www.uvacontemplation.org/sites/default/files/styles/panopoly_image_full/public/Classroom-Management2.jpg?itok=xTrAdUhW",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  componentDidMount() {
    Axios.get("/api/me").then(response => {
      console.log("HOME COMPONENT DID MOUNT", response);

      console.log(response.data.hasaccount);
      if (response.data.hasaccount === false) {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    const { activeIndex } = this.state;
    console.log(this.props);
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="home-div">
        <div className="text-focus-in">
          <p id="name-of-app">TUTORZWAY</p>
          <div />
          <section>
            <button
              className="scroll-down"
              address="true"
              onClick={() => {
                window.scroll({ top: 720, behavior: "smooth" });
              }}
            />
          </section>
        </div>
        <div className="main-pic">
          <div className="car-width">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </div>
          <div />
        </div>
        <div className="bottom">
          <div className="home-text">
            <h1 className="home-text">
              Learn on your terms from an expert tutor.
            </h1>
            <h4>Private, 1–on–1 lessons with the tutor of your choice.</h4>
            <div className="info-home">
              <div>
                <img
                  className="calculator"
                  src="https://image.flaticon.com/icons/svg/265/265681.svg"
                  alt="das"
                />
                <p className="home-image-font">Math</p>
              </div>
              <div>
                <img
                  className="calculator"
                  src="https://image.flaticon.com/icons/svg/708/708881.svg"
                  alt="sdf"
                />
                <p className="home-image-font">Languages</p>
              </div>
              <div>
                <img
                  className="calculator"
                  src="https://image.flaticon.com/icons/png/512/167/167709.png"
                  alt="sdsdf"
                />
                <p className="home-image-font">Test Prep</p>
              </div>
              <div>
                <img
                  className="calculator"
                  src="https://image.flaticon.com/icons/svg/167/167732.svg"
                  alt="gsdf"
                />
                <p className="home-image-font">Science</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-padding">
          <CardDeck>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#6d90be",
                borderColor: "#ffff"
              }}
            >
              <CardImg
                top
                width="100%"
                height="200px"
                src="https://images.pexels.com/photos/248152/pexels-photo-248152.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="box-text">Science</CardTitle>
                <hr />
                {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                <CardText className="box-textt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
            >
              <CardImg
                top
                width="100%"
                height="200px"
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="box-text">Math</CardTitle>
                <hr />
                {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                <CardText className="box-textt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
            >
              <CardImg
                top
                width="100%"
                height="200px"
                src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="box-text">Business</CardTitle>
                <hr />
                {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                <CardText className="box-textt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
            <Card
              body
              inverse
              style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
            >
              <CardImg
                top
                width="100%"
                height="200px"
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="box-text">Engineering</CardTitle>
                <hr />
                {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                <CardText className="box-textt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
        <div className="card-mobile">
          <CardDeck>
            <Fade left>
              <Card
                body
                inverse
                style={{
                  backgroundColor: "#6d90be",
                  borderColor: "#ffff"
                }}
              >
                <CardImg
                  top
                  width="100%"
                  height="200px"
                  src="https://images.pexels.com/photos/248152/pexels-photo-248152.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="box-text">Science</CardTitle>
                  <hr />
                  {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                  <CardText className="box-textt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade right>
              <Card
                body
                inverse
                style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
              >
                <CardImg
                  top
                  width="100%"
                  height="200px"
                  src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="box-text">Math</CardTitle>
                  <hr />
                  {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                  <CardText className="box-textt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade left>
              <Card
                body
                inverse
                style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
              >
                <CardImg
                  top
                  width="100%"
                  height="200px"
                  src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="box-text">Business</CardTitle>
                  <hr />
                  {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                  <CardText className="box-textt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
            <Fade right>
              <Card
                body
                inverse
                style={{ backgroundColor: "#6d90be", borderColor: "#ffff" }}
              >
                <CardImg
                  top
                  width="100%"
                  height="200px"
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="box-text">Engineering</CardTitle>
                  <hr />
                  {/* <CardSubtitle className="box-text">Card subtitle</CardSubtitle> */}
                  <CardText className="box-textt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardText>
                </CardBody>
              </Card>
            </Fade>
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Home;
