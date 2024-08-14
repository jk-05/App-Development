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

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/users');
  const users = await response.json();
  dispatch(setUsers(users));
};

