"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav className={`border-gray-200 border border-b-2  bordertransition-all`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-500 ">
            Work <span className=""></span> Manager
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => setVisible(!visible)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between transition-all ${
            visible ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-2   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-indigo-800  gap-2">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-indigo-500  rounded  md:hover:bg-transparent md:hover:text-indigo-700 md:p-0  dark:text-indigo-500   md:bg-transparent "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-indigo-500  rounded  md:hover:bg-transparent md:hover:text-indigo-700 md:p-0  dark:text-indigo-500   md:bg-transparent "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-indigo-500  rounded  md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:text-indigo-500 dark:text-indigo-500  md:bg-transparent "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                type="button"
                className="shadow-md text-white hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 bg-indigo-700 "
              >
                Login
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                href={"/signup"}
                type="button"
                className="shadow-md  text-white hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 bg-indigo-700"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
