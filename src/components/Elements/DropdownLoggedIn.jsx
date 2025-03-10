import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../services/authService";
import { getUser } from "../../services/dataService";

export const DropdownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  // const token = JSON.parse(sessionStorage.getItem("token"));
  // const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    setDropDown(false);
    navigate("/");
  };

  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.name}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/products"
            onClick={() => setDropDown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            onClick={() => setDropDown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
