import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = { value: "unanswered" };

  handleChange = (e) => {
    // e.preventDefault();
    this.setState(() => ({ value: e.target.value }));
  };
  render() {
    const { users, questions, authedUser } = this.props;
    const answeredQuestions = Object.keys(questions).filter(
      (qid) =>
        !!Object.keys(users[authedUser].answers).find(
          (ansQid) => ansQid === qid
        )
    );
    const unAnsweredQuestions = Object.keys(questions).filter(
      (qid) =>
        !Object.keys(users[authedUser].answers).find((ansQid) => ansQid === qid)
    );
    return (
      <div className="container">
        <label>
          Display:{" "}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="unanswered">Unanswered Questions</option>
            <option value="answered">Answered Questions</option>
          </select>
        </label>
        <div>
          {this.state.value === "answered" ? (
            <ul className="list">
              {answeredQuestions.map((qid) => (
                <li key={qid}>
                  {
                    <div style={{ borderColor: "black", borderStyle: "solid" }}>
                      <img
                        src={users[questions[qid].author].avatarURL}
                        alt={`Avatart of ${users[questions[qid].author].name}`}
                        className="avatar"
                        style={{ height: "50px", borderRadius: "25px" }}
                      />
                      <div style={{ display: "inline" }}>
                        Would you rather... <br />
                        <p style={{ fontSize: "12px" }}>
                          <strong>You answered: </strong>
                          {questions[qid][users[authedUser].answers[qid]].text}
                        </p>
                      </div>
                    </div>
                  }
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list">
              {unAnsweredQuestions.map((qid) => (
                <li key={qid}>
                  {
                    <div style={{ borderColor: "black", borderStyle: "solid" }}>
                      <img
                        src={users[questions[qid].author].avatarURL}
                        alt={`Avatart of ${users[questions[qid].author].name}`}
                        className="avatar"
                        style={{ height: "50px", borderRadius: "25px" }}
                      />
                      <div style={{ display: "inline" }}>
                        Would you rather... <br />
                        <p style={{ fontSize: "12px", color: "gray" }}>
                          ...{questions[qid].optionOne.text}...
                        </p>
                      </div>
                    </div>
                  }
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
