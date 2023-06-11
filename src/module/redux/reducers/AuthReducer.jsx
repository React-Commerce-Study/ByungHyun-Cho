const SET_TOKEN = "set_token";
const SET_LOGIN_TYPE = "set_login_type";
const AuthInitialState = {
  token: null,
  loginType: null,
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});
export const setLoginType = (loginType) => ({
  type: SET_LOGIN_TYPE,
  loginType,
});

export const AuthReducer = (state = AuthInitialState, action) => {
  console.log(action);

  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_LOGIN_TYPE:
      return {
        ...state,
        loginType: action.loginType,
      };
    default:
      return state;
  }
};
