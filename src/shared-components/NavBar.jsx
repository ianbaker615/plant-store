import { useContext } from "react";
import SessionContext from "context/SessionContext";

const NavBar = () => {
  const { username } = useContext(SessionContext);

  return (
    <nav className="flex justify-center bg-emerald-800 font-lato">
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="flex flex-col items-center text-2xl text-white font-playfair">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
          />
          Rica's Plants
        </div>
        <div className="">
          <button className="flex items-center text-emerald-200">
            <i className="mr-2 text-xl fa-solid fa-user"></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
