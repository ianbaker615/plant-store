const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/20"></div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen flex-1 bg-green-50">
        <img
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          className="w-24"
        />
        <div className="font-playfair text-emerald-800 text-xl m-2">
          Ian's Plants
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
