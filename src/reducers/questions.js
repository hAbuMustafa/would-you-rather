import {
  STORE_QUESTIONS,
  ADD_QUESTION,
  SUBMIT_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case STORE_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SUBMIT_ANSWER: // action.answer has authedUser, qid, answer
      return {
        ...state,
        [action.answer.qid]: {
          ...state[action.answer.qid],
          optionOne: {
            ...state[action.answer.qid].optionOne,
            votes:
              action.answer.answer === "optionOne"
                ? {
                    ...state[action.answer.qid].optionOne.votes.concat([
                      action.answer.authedUser,
                    ]),
                  }
                : { ...state[action.answer.qid].optionOne.votes },
          },
          optionTwo: {
            ...state[action.answer.qid].optionTwo,
            votes:
              action.answer.answer === "optionTwo"
                ? {
                    ...state[action.answer.qid].optionTwo.votes.concat([
                      action.answer.authedUser,
                    ]),
                  }
                : { ...state[action.answer.qid].optionTwo.votes },
          },
        },
      };

    // TODO: Append to user.answers
    default:
      return state;
  }
}
