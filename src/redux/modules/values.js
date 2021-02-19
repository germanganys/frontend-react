import entryAPI from 'api/entryAPI';
import {setEntries, addEntry} from './table';

const SELECT_R = 'values/SELECT_R';
const SELECT_X = 'values/SELECT_X';
const CHANGE_Y = 'values/CHANGE_Y';
const CLEAR_CURRENT = 'values/CLEAR_CURRENT';

const initialState = {
  rValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
  rCurrent: 1,
  xValues: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
  xCurrent: 0,
  yMin: -3,
  yMax: 3,
  yCurrent: 0
};

const RESPONSE_OK = 'ok'
const RESPONSE_FAIL = 'failed'

export default function valuesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_R:
      return Object.assign(
        {},
        state,
        {
          rCurrent: action.value
        }
      );
    case SELECT_X:
      return Object.assign(
        {},
        state,
        {
          xCurrent: action.value
        }
      );
    case CHANGE_Y:
      return Object.assign(
        {},
        state,
        {
          yCurrent: action.value
        }
      );
    case CLEAR_CURRENT:
      return Object.assign(
        {},
        state,
        {
          rCurrent: 1,
          xCurrent: undefined,
          yCurrent: undefined
        }
      );
    default:
      return state;
  }
}

export function selectR(value) {
  return {type: SELECT_R, value};
}

export function selectX(value) {
  return {type: SELECT_X, value};
}

export function changeY(value) {
  return {type: CHANGE_Y, value};
}

export function clearCurrent() {
  return {type: CLEAR_CURRENT};
}

export const checkEntry = () => (dispatch, getState) => {
  entryAPI.checkEntry(
      getState().values.xCurrent,
      getState().values.yCurrent,
      getState().values.rCurrent,
      localStorage.getItem('token'))
    .then(response => {
      if (response.status === 200 && response.data.status === RESPONSE_OK) {
        dispatch(addEntry(response.data.last_point));
      } else {
        alert('Невозможно добавить точку (проверьте R)');
      }
    })
    .catch(error => {
        alert(`${error}`);
    });
}

export const clearEntries = () => (dispatch) => {
  entryAPI.clearEntries(localStorage.getItem('token'))
    .then(response => {
      if (response.status === 200) {
        dispatch(setEntries([]));
      } else {
        alert('Невозможно удалить точки (перелогиньтесь или проверьте сеть)');
      }
    })
    .catch(error => {
        alert(`${error}`);
    });
}
