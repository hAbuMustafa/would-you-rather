import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    const sortedUserIds = Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    );
    return (
      <div className="container">
        <ul className="list">
          {sortedUserIds.map((userId) => (
            <li key={userId} className="leaderboard-item">
              <img
                src={users[userId].avatarURL}
                alt={`Avatar of ${users[userId].name}`}
                className="avatar"
              />
              <div className="user-data">
                <h3 className="user-name">{users[userId].name}</h3>
                Answered Questions: {Object.keys(users[userId].answers).length}
                <br />
                Created Questions: {users[userId].questions.length}
              </div>
              <div className="user-data middle">
                <h1>Score</h1>
                <h2>
                  {Object.keys(users[userId].answers).length +
                    users[userId].questions.length}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}
export default connect(mapStateToProps)(Leaderboard);
