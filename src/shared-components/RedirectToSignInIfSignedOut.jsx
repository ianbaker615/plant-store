import { useContext, useEffect } from "react";
import SessionContext from "context/SessionContext";
import { useNavigate } from "react-router-dom";

const RedirectToSignInIfSignedOut = (props) => {
  const navigate = useNavigate();
  const { username } = useContext(SessionContext);

  // if user is signed out, redirect to /sign-in
  useEffect(() => {
    if (username === null) {
      navigate("/");
    }
  }, [username]);

  // otherwise, render the children
  return props.children;
};

export default RedirectToSignInIfSignedOut;
