const SET_TOKEN = "set_token";
const SET_LOGIN_TYPE = "set_login_type";

interface AuthState {
  token: string | null;
  loginType: string | null;
}

interface SetTokenAction {
  type: typeof SET_TOKEN;
  token: string;
}

interface SetLoginTypeAction {
  type: typeof SET_LOGIN_TYPE;
  loginType: string;
}

type AuthAction = SetTokenAction | SetLoginTypeAction;

const AuthInitialState: AuthState = {
  token: null,
  loginType: null,
};

export const setToken = (token: string): SetTokenAction => ({
  type: SET_TOKEN,
  token,
});

export const setLoginType = (loginType: string): SetLoginTypeAction => ({
  type: SET_LOGIN_TYPE,
  loginType,
});

export const AuthReducer = (
  state: AuthState = AuthInitialState,
  action: AuthAction
): AuthState => {
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
