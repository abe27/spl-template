/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faArrowRightFromBracket,
  faCashRegister,
  faCloudDownload,
  faDatabase,
  faEnvelope,
  faHome,
  faScrewdriverWrench,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { UserTopMenu } from "@/components";

const menuList = [
  {
    name: "Home",
    href: "/",
    classActive: "text-red-600 border-red-600",
    class: "hover:text-red-900 hover:border-red-600",
    icon: faHome,
  },
  {
    name: "Receive",
    href: "/receive",
    classActive: "text-orange-600 border-orange-600",
    class: "hover:text-orange-900 hover:border-orange-600",
    icon: faCloudDownload,
  },
  {
    name: "Prepare",
    href: "/prepare",
    classActive: "text-amber-600 border-amber-600",
    class: "hover:text-amber-900 hover:border-amber-600",
    icon: faCashRegister,
  },
  {
    name: "Stock",
    href: "/stock",
    classActive: "text-yellow-600 border-yellow-600",
    class: "hover:text-yellow-900 hover:border-yellow-600",
    icon: faDatabase,
  },
  {
    name: "Administrator",
    href: "/administrator",
    classActive: "text-lime-600 border-lime-600",
    class: "hover:text-lime-900 hover:border-lime-600",
    icon: faScrewdriverWrench,
  },
];

const NavBar = ({ brand, searchProp = false }) => {
  const router = useRouter();
  const [txtSearch, setTxtSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setTxtSearch(e.target.value);
    searchProp(e.target.value);
  };

  const checkRouterActive = (i) => {
    if (i.href.substring(0, 4) === router.pathname.substring(0, 4)) {
      return `block py-1 pl-1 no-underline align-middle border-b-2 md:py-3 hover:cursor-pointer ${i.class} ${i.classActive}`;
    }
    return `block py-1 pl-1 no-underline align-middle border-b-2 md:py-3 hover:cursor-pointer ${i.class}`;
  };

  return (
    <nav id="header" className="fixed top-0 z-10 w-full bg-white shadow">
      <div className="container flex flex-wrap items-center w-full pt-3 pb-3 mx-auto mt-0 md:pb-0">
        <div className="w-1/2 pl-2 md:pl-0">
          <Link href="/">
            <span className="text-base font-bold text-gray-900 no-underline xl:text-xl hover:no-underline">
              <span className="pr-3 text-pink-600">
                <FontAwesomeIcon icon={faSun} />
              </span>
              {brand}
            </span>
          </Link>
        </div>
        <div className="w-1/2 pr-0">
          <div className="relative inline-block float-right">
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
            <UserTopMenu />

            <div className="block pr-4 lg:hidden">
              <button
                id="nav-toggle"
                className="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded appearance-none hover:text-gray-900 hover:border-teal-500 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="z-20 flex-grow hidden w-full mt-2 bg-white lg:flex lg:items-center lg:w-auto lg:mt-0"
          id="nav-content"
        >
          <ul className="items-center flex-1 px-4 list-reset lg:flex md:px-0">
            {menuList.map((i, x) => (
              <li className="my-2 mr-6 md:my-0" key={x}>
                <Link href={i.href}>
                  <span className={checkRouterActive(i)}>
                    <span className="mr-3 ">
                      <FontAwesomeIcon icon={i.icon} />
                    </span>
                    <span className="pb-1 text-sm md:pb-0">{i.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative pl-4 pr-4 pull-right md:pr-0">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-2 py-1 pl-10 text-sm leading-normal text-gray-800 transition bg-gray-100 border rounded appearance-none focus:outline-none focus:border-gray-700"
              value={txtSearch}
              onChange={handleSearch}
            />
            <span className="absolute search-icon my-search hover:cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-800 pointer-events-none fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </span>
            {txtSearch != "" && (
              <span
                className="absolute search-icon my-clear-search hover:cursor-pointer"
                onClick={() => setTxtSearch("")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-800 pointer-events-none fill-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
