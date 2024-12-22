const Field = (props) => {
  const { label, type, value, onChange } = props;

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="w-64 px-2 py-1 border rounded-lg bg-slate-50 border-slate-200 focus:outline-emerald-600"
      />
    </div>
  );
};

export default Field;