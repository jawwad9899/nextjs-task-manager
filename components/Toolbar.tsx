"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { Context } from "@/context/createContext";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Message from "./Message";
import { Oval } from "react-loader-spinner";
export default function Toolbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const { button, currentUser } = useContext<any | null>(Context);
  const [logOutLoading, setLogOutLoading] = useState<boolean>(false);
  const onLogout = async () => {
    try {
      setLogOutLoading(true);
      await axios.get("/api/user/logout");
      setLogOutLoading(false);
      toast.info("Logging Out...");
      router.push("/");
    } catch (error) {
      toast.error("Something Error Occured!");
    }
  };

  return (
    <>
      <Message />
      <div className="z-50 w-full h-16 shadow-md top-0 left-1/2">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto items-center">
          <Link
            href={"/tasks/task"}
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-l-full   group"
          >
            <svg
              className="w-6 h-6  text-indigo-500  group-hover:text-indigo-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
          <Link
            href={"/tasks/list"}
            data-tooltip-target="tooltip-wallet"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5   group"
          >
            <svg
              className="w-6 h-6 mt-2 text-indigo-500  group-hover:text-indigo-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 6H3a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2zm0 6H3a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2z"
              />
            </svg>
          </Link>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Wallet
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
          {/* Plus Button */}
          <div className="flex items-center justify-center">
            <button
              disabled={currentPath === "/tasks/list" ? true : false}
              onClick={() => {
                button?.updateState(!button?.state);
              }}
              data-tooltip-target="tooltip-new"
              type="button"
              className={`inline-flex ${
                currentPath === "/tasks/list"
                  ? "opacity-40"
                  : " hover:scale-110"
              }  items-center justify-center w-10 h-10 font-medium bg-indigo-600 rounded-full transition-transform  group focus:ring-4 focus:ring-indigo-300 focus:outline-none `}
            >
              {button?.state ? (
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 9h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
          <button
            onClick={onLogout}
            data-tooltip-target="tooltip-settings"
            type="button"
            className="flex gap-2 items-center justify-center px-5   group"
          >
            <svg
              className="w-4 h-4 ml-2.5 text-indigo-500  group-hover:text-indigo-700 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
            {logOutLoading && <Oval color="#fff" width="30" height={20} />}
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
          {/* Drop Down */}
          <div className="relative inline-block text-left group">
            <button
              data-tooltip-target="tooltip-profile"
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 rounded-r-full   group"
              onClick={() => {
                setDropDownState(!dropDownState);
              }}
            >
              <div
                title={currentUser?.name}
                className="bg-indigo-900 text-white font-bold text-xl px-4 py-2 rounded-full"
              >
                {currentUser ? currentUser?.name[0].toUpperCase() : ".."}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
