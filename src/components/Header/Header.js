import Networking from "../../networking.js";
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
  const networking = new Networking();
  const navigate = useNavigate();

  async function handleLogout() {
    await networking.logoutUser();
    navigate("/login");
  }

  return (
    <nav className="mx-auto border-b-[1px] border-gray-600 px-2 py-2.5 w-[80%] mt-3 mb-5">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <h1 className="self-center text-3xl font-semibold whitespace-nowrap ">
          World Bank
        </h1>
        <div className="flex gap-5">
          <Link to="/landing-page/search">
            <button
              type="submit"
              className=" text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
              w-full sm:w-auto px-4 py-1 text-center dark:bg-gray-600
            dark:hover:bg-gray-500"
            >
              Search
            </button>
          </Link>

          <Link to="/landing-page/history">
            <button
              type="submit"
              className="text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
              w-full sm:w-auto px-4 py-1 text-center dark:bg-gray-600
            dark:hover:bg-gray-500 "
            >
              History
            </button>
          </Link>

          <button
            type="submit"
            className="text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
              w-full sm:w-auto px-4 py-1 text-center dark:bg-gray-600
            dark:hover:bg-gray-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
