import { STORE_USERS } from "../actions/users";
import { SUBMIT_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case STORE_USERS:
      return { ...state, ...action.users };
    case SUBMIT_ANSWER:
      return {
        ...state,
        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
            ...state[action.answer.authedUser].answers,
            [action.answer.qid]: action.answer.answer,
          },
        },
      };
    default:
      return state;
  }
}
