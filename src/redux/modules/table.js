import entryAPI from 'api/entryAPI';
import {setLoading} from './auth';

const SET_ENTRIES = 'table/SET_ENTRIES';
const CLEAR_ENTRIES = 'table/CLEAR_ENTRIES';
const ADD_ENTRY = 'table/ADD_ENTRY';

const initialState = {
  entries: []
};

const RESPONSE_OK = 'ok'
const RESPONSE_FAIL = 'failed'

export default function tableReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ENTRIES:
      return Object.assign(
        {},
        state,
        {
          entries: action.value
        }
      );
    case CLEAR_ENTRIES:
      return Object.assign(
        {},
        state,
        {
          entries: []
        }
      );
    case ADD_ENTRY:
      return Object.assign(
        {},
        state,
        {
          entries: [...state.entries, action.value]
        }
      );
    default:
      return state;
  }
}

export function setEntries(value) {
  return {type: SET_ENTRIES, value};
}

export function clearEntries() {
  return {type: CLEAR_ENTRIES};
}

export function addEntry(value) {
  return {type: ADD_ENTRY, value};
}

export const getEntries = () => (dispatch) => {
  dispatch(setLoading(true));
  entryAPI.getEntries(localStorage.getItem('token'))
    .then(response => {
      if (response.status === 200 && response.data.status === RESPONSE_OK) {
        dispatch(setEntries(response.data.data));
      } else {
        alert(`Невозможно получить точки (возможно сессия истекла)`);
      }
      dispatch(setLoading(false));
    })
    .catch(error => {
      alert(`${error}`);
      dispatch(setLoading(false));
    });
}
