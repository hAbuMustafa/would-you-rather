import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const STORE_QUESTIONS = "STORE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";

export function storeQuestions(questions) {
  return {
    type: STORE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

function submitAnswer(answer) {
  return {
    type: SUBMIT_ANSWER,
    answer,
  };
}

export function handleSubmitAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => dispatch(submitAnswer({ authedUser, qid, answer })));
  };
}
