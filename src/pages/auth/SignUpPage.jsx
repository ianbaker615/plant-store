import { useState } from "react";
import FormContainer from "../../FormContainer";
import AuthForm from "./AuthForm";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "services/user";
import RedirectToPlantsPageIfSignedIn from "shared-components/RedirectToPlantsPageIfSignedIn";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <RedirectToPlantsPageIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
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
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonLabel="sign up"
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setError("username is too short");
            }
            if (values.password.length < 4) {
              setError("password is too short");
            }
            if (values.password !== values["confirm password"]) {
              setError("passwords do not match");
            }

            const response = await userService.createUser({
              username: values.username,
              password: values.password,
            });

            if (response.status === 201) {
              setError("");
              console.log("user created");
              navigate("/", {
                state: {
                  newAccount: true,
                },
              });
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link to="/" className="text-sm text-green-600 underline">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsPageIfSignedIn>
  );
};

export default SignUpPage;
