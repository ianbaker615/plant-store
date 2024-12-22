import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;

  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form className="p-4 m-4 bg-white border rounded-lg font-lato border-slate-200">
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="w-full py-2 mt-4 text-white rounded-lg bg-emerald-700">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
