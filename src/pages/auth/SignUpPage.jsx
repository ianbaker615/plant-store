import AuthForm from "./AuthForm";

const SignUpPage = () => {
  return (
    <div className="font-playfair">
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
    </div>
  );
};

export default SignUpPage;
