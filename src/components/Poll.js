import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSubmitAnswer } from "../actions/questions";

class Poll extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState(() => ({
      value: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, qid } = this.props;
    dispatch(handleSubmitAnswer(qid, this.state.value));
  };

  render() {
    const { users, questions, authedUser } = this.props;
    const question = questions[this.props.qid];
    return !!Object.keys(users[authedUser].answers).find(
      (key) => key === question.id
    ) ? (
      ////////////////////////user did answer
      <div className="container">
        <h1 className="fragment-header">{`Asked by ${
          users[question.author].name
        }`}</h1>
        <img
          src={users[question.author].avatarURL}
          alt={`Avatar of ${users[question.author].name}`}
          className="avatar"
        />
        <div style={{ display: "inline", verticalAlign: "top" }}>
          <h3>Results:</h3>
          <div style={{ borderStyle: "solid", borderColor: "black" }}>
            <p>
              {question.optionOne.text}{" "}
              {users[authedUser].answers[question.id] === "optionOne" && (
                <span style={{ color: "maroon" }}>
                  <strong>Your Choice!</strong>
                </span>
              )}
            </p>
            <p>
              {questions[question.id].optionOne.votes.length} out of{" "}
              {questions[question.id].optionOne.votes.length +
                questions[question.id].optionTwo.votes.length}{" "}
              (
              {(questions[question.id].optionOne.votes.length * 100) /
                (questions[question.id].optionOne.votes.length +
                  questions[question.id].optionTwo.votes.length)}
              %)
            </p>
          </div>
          <div style={{ borderStyle: "solid", borderColor: "black" }}>
            <p>
              {question.optionTwo.text}{" "}
              {users[authedUser].answers[question.id] === "optionTwo" && (
                <span style={{ color: "maroon" }}>
                  <strong>Your Choice!</strong>
                </span>
              )}
            </p>
            <p>
              {questions[question.id].optionTwo.votes.length} out of{" "}
              {questions[question.id].optionOne.votes.length +
                questions[question.id].optionTwo.votes.length}{" "}
              (
              {(questions[question.id].optionTwo.votes.length * 100) /
                (questions[question.id].optionOne.votes.length +
                  questions[question.id].optionTwo.votes.length)}
              %)
            </p>
          </div>
        </div>
      </div>
    ) : (
      ////////////////////////user didn't answer

      <div className="container">
        <h1 className="fragment-header">{`${
          users[question.author].name
        } asks:`}</h1>
        <img
          src={users[question.author].avatarURL}
          alt={`Avatar of ${users[question.author].name}`}
          className="avatar"
        />
        <div style={{ display: "inline", verticalAlign: "top" }}>
          <h3>Would you rather...</h3>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="optionOne">{question.optionOne.text}</option>
              <option value="optionTwo">{question.optionTwo.text}</option>
            </select>
            <button className="submit" disabled={!this.state.value}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return { users, questions, authedUser };
}

export default connect(mapStateToProps)(Poll);
