import { useContext, useState } from "react";
import SessionContext from "context/SessionContext";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="flex justify-center bg-emerald-800 font-lato"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="flex flex-col items-center text-2xl text-white font-playfair">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
          />
          Rica's Plants
        </div>
        <div className="">
          <div className="relative w-32">
            <button
              className="flex items-center text-emerald-200"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="mr-2 text-xl fa-solid fa-user"></i>
              {username}
            </button>
            {isMenuOpen && (
              <button
                className="text-slate-500 bg-white hover:text-emerald-700 absolute rounded-lg shadow-md p-2 top-9"
                onClick={signOut}
              >
                <i className="fas fa-sign-out mr-1" />
                sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
