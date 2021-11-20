const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action is: ", action);
  console.log("The state is: ", store);
  const newState = next(action);
  console.log("The new State is: ", store.getState());
  console.groupEnd();
  return newState;
};

export default logger;
