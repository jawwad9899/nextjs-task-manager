"use client";
import Link from "next/link";
import Message from "@/components/Message";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

export default function Login() {
  const router = useRouter();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (formFields.email.length > 3 && formFields.password.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formFields]);

  const onLogin = async () => {
    try {
      setLoading(true);
      await axios.post("/api/user/login", formFields);
      toast.success("Successfully Logged In!");
      setLoading(false);
      setTimeout(() => {
        router.push("/tasks/task");
      }, 800);
    } catch (error: any) {
      let msg = error.response.data.msg;
      toast.error(msg);
    }
  };

  return (
    <>
      <Message />
      <section className=" body-font relative ">
        <div className="container px-5 py-36 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mr-auto">
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
              onClick={onLogin}
              disabled={disabled}
              className={`flex justify-center  items-center gap-2 text-white  border-0 py-2 px-6  rounded text-lg ${
                disabled
                  ? "bg-indigo-200"
                  : "bg-indigo-600 focus:outline-none hover:bg-indigo-800"
              }`}
            >
              Login {loading && <Oval color="#fff" width="30" height={20} />}
            </button>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Don{"'"}t have an account?
              <Link href={"/signup"} className="text-indigo-600 ">
                {"  "}
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
