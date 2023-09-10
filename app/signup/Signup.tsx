"use client";
import Message from "@/components/Message";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSignup = async () => {
    try {
      await axios.post("/api/user/signup", formFields);
      setFormFields({ name: "", email: "", password: "" });
      toast.success("Success!");
      setTimeout(() => {
        router.push("/login");
      }, 800);
    } catch (error: any) {
      let msg = error.response.data.msg;
      toast.error(msg);
    }
  };

  return (
    <>
      <Message />
      <section className="body-font relative p-4">
        <div className="container px-5 py-28 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
          <div className="lg:w-1/3 md:w-1/2 flex flex-col  md:ml-auto w-full md:py-8 mt-8 md:mt-0 mr-auto ">
            <div className="flex justify-center">
              <svg
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-20 h-20 rounded-full bg-indigo-200"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                value={formFields.name}
                onChange={(e) => onChangeHanlder(e)}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                value={formFields.email}
                onChange={(e) => onChangeHanlder(e)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                value={formFields.password}
                onChange={(e) => onChangeHanlder(e)}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={onSignup}
              className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg"
            >
              Signup
            </button>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Already have an account?
              <Link href={"/login"} className="text-indigo-600 ">
                {"  "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
