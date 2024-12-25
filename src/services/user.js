import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", {
    username,
    password,
  });

export const fetchUserSession = ({ username, password }) =>
  apiFetch("POST", "/users/session", {
    username,
    password,
  });

const USER_SESSION_TOKEN_KEY = "user_session_token";

export const setUserSessionTokenStorage = (token) =>
  localStorage.setItem(USER_SESSION_TOKEN_KEY, token);

export const getUserSessionTokenStorage = () =>
  localStorage.getItem(USER_SESSION_TOKEN_KEY);

export const removeUserSessionTokenStorage = () =>
  localStorage.removeItem(USER_SESSION_TOKEN_KEY);
