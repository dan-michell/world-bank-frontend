import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Networking from "../../networking";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const networking = new Networking();
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();
    setShowResponse(false);
    const loginResponseInfo = await networking.loginUser(username, password);
    if (loginResponseInfo) {
      navigate("/landing-page/search");
    }
    setShowResponse(true);
  }

  return (
    <div className="flex items-center flex-col h-screen w-screen">
      <h1 className=" text-6xl mt-20 bg-gray-300 p-10 rounded-3xl shadow-xl">World Bank Dashboard</h1>
      <form className="w-[50%] mt-20">
        <h2 className="text-2xl mb-3 animate-pulse">Login</h2>
        <div className="relative z-0 w-full mb-6 group">
          <input
            data-testid="username-input"
            type="email"
            name="floating_email"
            value={username}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="flex gap-5">
          <div className="relative z-0 w-full mb-6 group">
            <input
              data-testid="password-input"
              type="password"
              value={password}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            data-testid="login-button"
            className="text-gray-200 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800"
            onClick={handleUserLogin}
          >
            Login
          </button>
          <Link to="/register">
            <button
              data-testid="dont-have-an-account-button"
              type="submit"
              className="bg-transparent text-gray-600 text-sm italic ml-3 p-0 hover:text-black"
            >
              Don't have an account?
            </button>
          </Link>
        </div>
        {showResponse ? (
          <p
            data-testid="no-user-found-alert"
            className="text-gray-700 text-lg mt-5"
          >
            No user found, try again or register.
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default LoginForm;
