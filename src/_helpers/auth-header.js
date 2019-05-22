export function authHeader() {
    // return authorization header with jwt token
    let _user_ = JSON.parse(localStorage.getItem('_user_'));

    if (_user_ && _user_.token) {
        return { 'Authorization': 'Bearer ' + _user_.token };
    } else {
        return {};
    }
}