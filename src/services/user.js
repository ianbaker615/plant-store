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
