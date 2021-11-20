import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <div className="middle">
              <NavBar />
              {this.props.loading === true ? null : (
                <Routes>
                  <Route
                    exact
                    strict
                    path="/leaderboard"
                    element={<Leaderboard />}
                  />
                  <Route exact strict path="/" element={<Dashboard />} />
                  <Route exact strict path="/add" element={<NewQuestion />} />
                </Routes>
              )}
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
