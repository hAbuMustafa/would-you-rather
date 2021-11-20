import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class LoginForm extends Component {
  state = {
    value: "guest",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState(() => ({ value: e.target.value }));
    const { dispatch } = this.props;
    //TODO dispatch authedUser
  };
  render() {
    return (
      <div className="container middle">
        <h1 className="fragment-header">Login</h1>
        <h3 style={{ textTransform: "uppercase", margin: "10px" }}>
          welcome to the would you rather app
        </h3>
        <h4>Sign In</h4>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          style={{ marginBottom: "10px" }}
        >
          <option value="guest" key="guest" disabled>
            Please Select Your Name
          </option>
          {Object.keys(this.props.users).map((user) => (
            <option
              key={this.props.users[user].id}
              value={this.props.users[user].id}
            >
              {this.props.users[user].name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}
export default connect(mapStateToProps)(LoginForm);
