import { useState } from "react";
import FormContainer from "FormContainer";
import AuthForm from "./AuthForm";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const newAccount = location.state?.newAccount;

  return (
    <FormContainer>
      {error && <div className="text-red-700 font-lato">{error}</div>}
      {newAccount && (
        <div className="text-green-700 font-lato bg-green-200 px-4 py-2 mx-4 rounded-md border border-green-300">
          Account created successfully! Please sign in.
        </div>
      )}
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonLabel="sign in"
        onSubmit={async (values) => {
          const response = await userService.fetchUserSession(values);
          if (response.status === 201) {
            setError("");
            console.log("user signed in");
          } else {
            setError("error signing in user");
          }
        }}
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        sign up
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
