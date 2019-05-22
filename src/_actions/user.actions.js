import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {
    return dispatch => {

        //dispatch(request({ username }));
        //これは何のため？　コメントアウトしても動くけど？。

        userService.login(username, password)
            .then(
                return_user => { 
                    dispatch(success(return_user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(param_user) { return { type: userConstants.LOGIN_REQUEST, param_user } }
    function success(login_user) { return { type: userConstants.LOGIN_SUCCESS, login_user } }
        // src\_reducers\authentication.reducer.js  _user_: action.login_user
        // 渡し先のstate.authenticationは、login_userというkey名で受け取るので、ここの引数名もlogin_userに合わせる。
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}