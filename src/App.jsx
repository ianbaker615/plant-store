import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import { useState } from "react";
import SessionContext from "./context/SessionContext";
import * as userService from "services/user";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [userSessionToken, setUserSessionToken] = useState(
    userService.getUserSessionTokenStorage()
  );

  return (
    <SessionContext.Provider
      value={{
        username: userSessionToken
          ? jwtDecode(userSessionToken).username
          : null,
        signIn: (token) => {
          setUserSessionToken(token);
          userService.setUserSessionTokenStorage(token);
        },
        signOut: () => {
          setUserSessionToken(null);
          userService.removeUserSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
