import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const { authedUser, users } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink end to="/add">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink end to="/leaderboard">
              Leaderboard
            </NavLink>
          </li>
          <li
            style={{
              display: "inline-block",
              position: "fixed",
              right: "0px",
              top: "0px",
            }}
          >
            <span>Welcome, {users[authedUser].name}</span>
            <img
              src={users[authedUser].avatarURL}
              alt={`Avatart of ${users[authedUser].name}`}
              className="avatar"
              style={{
                height: "25px",
                borderRadius: "12px",
                verticalAlign: "middle",
              }}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}

export default connect(mapStateToProps)(NavBar);
