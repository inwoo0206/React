/*
import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
*/

import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIAL_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({form,key,value}) => ({
    form, //register, login
    key, // username, password , passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state,{payload: {form,key,value} }) =>
    produce(state, draft => {
      draft[form][key] = value; // ex) state.register.username 을 바꾼다.
    }),
    [INITIALIZE_FORM]: (state, {payload: form}) =>({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;