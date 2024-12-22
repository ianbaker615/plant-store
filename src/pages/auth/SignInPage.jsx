import FormContainer from "../../FormContainer";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const SignInPage = () => {
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
        ]}
        submitButtonLabel="sign in"
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        sign up
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
