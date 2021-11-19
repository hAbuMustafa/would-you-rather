import { getInitialData } from "../utils/api";
import { storeQuestions } from "./questions";
import { storeUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER = "hAbuMustafa";

export default function handleInitialData() {
  return async (dispatch) => {
    return await getInitialData().then(({ users, questions }) => {
      dispatch(storeQuestions(questions));
      dispatch(storeUsers(users));
      dispatch(setAuthedUser(AUTHED_USER));
    });
  };
}
