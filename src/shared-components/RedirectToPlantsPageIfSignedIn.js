import { useContext, useEffect } from "react";
import SessionContext from "context/SessionContext";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsPageIfSignedIn = (props) => {
  const navigate = useNavigate();
  const { username } = useContext(SessionContext);

  // if user is signed in, redirect to /plant-list
  useEffect(() => {
    if (username !== null) {
      navigate("/plant-list");
    }
  }, [username]);

  // otherwise, render the children
  return props.children;
};

export default RedirectToPlantsPageIfSignedIn;
