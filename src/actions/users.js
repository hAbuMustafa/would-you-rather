export const STORE_USERS = "STORE_USERS";

export const storeUsers = (users) => {
  return {
    type: STORE_USERS,
    users,
  };
};
