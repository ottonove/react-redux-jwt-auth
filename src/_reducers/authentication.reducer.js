import { userConstants } from '../_constants';

let p_user_ = JSON.parse(localStorage.getItem('_user_'));
const initialState = p_user_ ? { loggedIn: true, p_user_ } : {};
console.log(initialState)

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        _user_: action._user_
      };
    case userConstants.LOGIN_SUCCESS:
      console.log("p_user",p_user_);
      console.log("initialState => ", initialState);
      return {
        loggedIn: true,
        p_user_: action.login_user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}