import { STORE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case STORE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
