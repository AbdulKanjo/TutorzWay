import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import router from "./router";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./ducks/store";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ScrollToTop from "react-scroll-up";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {router}
            <Footer />
            <ScrollToTop showUnder={160} transitionDuration={10}>
              <span>
                <img
                  alt="app-pag"
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
