/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import {
  faArrowRightFromBracket,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserTopMenu = () => {
  const router = useRouter()
  return (
    <div className="relative text-sm dropdown dropdown-bottom dropdown-hover dropdown-end">
      <button
        tabIndex={0}
        id="userButton"
        className="flex items-center mr-3 focus:outline-none"
      >
        <img
          className="w-8 h-8 mr-4 rounded-full"
          src="http://i.pravatar.cc/300"
          alt="Avatar of User"
        />{" "}
        <span className="hidden md:inline-block">Hi, User </span>
        <svg
          className="h-2 pl-2"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129 129"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          enableBackground="new 0 0 129 129"
        >
          <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
          </g>
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52 list-reset"
      >
        <li>
          <span
            onClick={() => router.push("/profile")}
            className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
          >
            <span className="mr-3">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="pb-1 text-sm md:pb-0">My account</span>
          </span>
        </li>
        <li>
          <span
            onClick={() => router.push("/message")}
            className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
          >
            <span className="mr-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="pb-1 text-sm md:pb-0">Notifications</span>
          </span>
        </li>
        <li></li>
        <li>
          <span
            onClick={() => router.push("/logout")}
            className="block px-4 py-2 text-gray-900 no-underline hover:bg-gray-400 hover:no-underline"
          >
            <span className="mr-3">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span className="pb-1 text-sm md:pb-0">Logout</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserTopMenu;
