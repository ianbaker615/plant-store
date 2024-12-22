import FormContainer from "../../FormContainer";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <FormContainer>
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
      />
      <Link to="/" className="text-sm text-green-600 underline">
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
