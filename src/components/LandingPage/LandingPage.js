import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/App.css";
import { Link } from "react-router-dom";
class LandingPage extends Component {
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const reactLogo = require("../../images/React-logo.png");
    const authLogo = require("../../images/auth.png");
    const graphql = require("../../images/graphql.png");
    const hasuraLogo = require("../../images/green-logo-white.svg");
    const apolloLogo = require("../../images/apollo.png");
    const rightImg = require("../../images/right-img.png");

    return (
      <div className="container-fluid gradientBgColor minHeight">
        <div>
          <div className="headerWrapper">
            <div className="headerDescription">
              {isAuthenticated() && (
                <Link to="/home">Realtime React Todo App Demo</Link>
              )}
              {!isAuthenticated() && <span>Realtime React Todo App Demo</span>}
            </div>
            <div className="loginBtn">
              {!isAuthenticated() && (
                <button
                  id="qsLoginBtn"
                  bsstyle="primary"
                  className="btn-margin logoutBtn"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </button>
              )}
              {isAuthenticated() && (
                <button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin logoutBtn"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  auth: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default LandingPage;
