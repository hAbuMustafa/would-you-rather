import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    goHome: false,
  };

  handle1Change = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  handle2Change = (e) => {
    const optionTwo = e.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { optionOne, optionTwo } = this.state;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      goHome: true,
    }));
  };

  render() {
    const { goHome } = this.state;

    if (goHome === true) {
      return <Navigate to="/" replace />;
    }
    return (
      <div className="container">
        <h1 className="fragment-header">Create New Question</h1>
        <h3>Would you rather...</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="option"
            placeholder="Enter the first option"
            value={this.state.optionOne}
            onChange={this.handle1Change}
          />
          <p>------------- OR -------------</p>
          <input
            type="text"
            className="option"
            placeholder="Enter the second option"
            value={this.state.optionTwo}
            onChange={this.handle2Change}
          />
          <button
            className="submit"
            disabled={!(this.state.optionOne && this.state.optionTwo)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
