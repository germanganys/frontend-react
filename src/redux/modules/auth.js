import authAPI from 'api/authAPI';
import {getEntries, clearEntries} from './table';
import {clearCurrent} from './values';

const SET_LOADING = 'auth/SET_LOADING';
const SET_SERVER_ERROR_MESSAGE = 'auth/SET_SERVER_ERROR_MESSAGE';
const SET_LOGGED_USER = 'auth/SET_LOGGED_USER';

const RESPONSE_OK = 'ok'
const RESPONSE_FAIL = 'failed'

const initialState = {
  isLoading: false,
  loggedUser: '',
  serverErrorMessage: ''
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return Object.assign(
        {},
        state,
        {
          isLoading: action.value
        }
      );
    case SET_SERVER_ERROR_MESSAGE:
      return Object.assign(
        {},
        state,
        {
          serverErrorMessage: action.value
        }
      );
    case SET_LOGGED_USER:
      return Object.assign(
        {},
        state,
        {
          loggedUser: action.value
        }
      );
    default:
      return state;
  }
}

export function setLoading(value) {
  return {type: SET_LOADING, value};
}

export function setServerErrorMessage(value) {
  return {type: SET_SERVER_ERROR_MESSAGE, value};
}

export function setLoggedUser(value) {
  return {type: SET_LOGGED_USER, value};
}

export const initializeAuth = () => (dispatch) => {
  let currentUser = localStorage.getItem('token');
  if (currentUser !== null) {
    dispatch(setLoggedUser(currentUser))
    dispatch(getEntries());
  }
}

export const login = (username, password) => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.login(username, password)
    .then(response => {
      if (response.status === 200) {
        if (response.data.status === RESPONSE_OK) {
          localStorage.setItem('token', response.data.token);
          dispatch(setLoggedUser(response.data.token))
          dispatch(getEntries());
        } else {
          dispatch(setServerErrorMessage('Failed to login'))
        }
      } else {
          dispatch(setServerErrorMessage('Server error'))
      }
      dispatch(setLoading(false));
    })
    .catch(error => {
      alert(`Непредвиденный ответ ${error.response.status} от сервера!`);
      dispatch(setLoading(false));
    });
}

export const register = (username, password) => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.register(username, password)
    .then(response => {
      if (response.status === 200) {
        dispatch(login(username, password));
      } else {
        dispatch(setServerErrorMessage('Register failed'))
      }
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setServerErrorMessage('Server error'))
      dispatch(setLoading(false));
    });
}

export const logout = () => (dispatch) => {
  authAPI.logout(localStorage.getItem('token'))
  localStorage.removeItem('token');
  dispatch(setLoggedUser(''))
  dispatch(clearCurrent());
  dispatch(clearEntries());
}
