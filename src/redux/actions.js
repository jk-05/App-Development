// redux/actions.js
export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});
