import { produce } from 'immer';

const INITIAL_STATE = {
  profile: undefined,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/LOGOUT_SUCCESS':
      return produce(state, draft => {
        draft.profile = INITIAL_STATE.profile;
      });
    default:
      return state;
  }
}
