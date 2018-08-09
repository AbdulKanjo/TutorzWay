import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import router from "./router";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./ducks/store";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTop from "react-scroll-up";
// import BackgroundSlideshow from "react-background-slideshow";

// import image1 from "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiHyu3w67vcAhUCVa0KHaTCDCUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.casthighlight.com%2Ftechnical-debt-affecting-compound-interest-customers%2F&psig=AOvVaw1kfgfy__xMAIZvgOkrNjTU&ust=1532662753261939";
// import image2 from "http://www.sdjgjx.com/up/pc/background%20hd.jpg";
// import image3 from "https://i.ytimg.com/vi/5-LyRjHlRgQ/maxresdefault.jpg";
// https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BTrHt7uCiu335hjs/science-objects-animated-background-for-school-education-hd-motion-graphic_bg66rkiwe_thumbnail-full06.png'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {router}
            {/* <BackgroundSlideshow images={[image1, image2, image3]} /> */}
            <Footer />
            <ScrollToTop showUnder={160} transitionDuration={10}>
              <span>
                <img
                  width="40px"
                  src="https://www.new-care.nl/static/version1531226440/frontend/newcare/theme/nl_NL/images/back-to-top.png"
                />
              </span>
            </ScrollToTop>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
