"use client";
import heroSvg from "@/app/assets/hero.svg";
import addTask from "@/app/assets/add_task.svg";
import removeTask from "@/app/assets/remove_task.svg";
import showTask from "@/app/assets/show_task.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* @ts-ignore */}
      <section className="text-gray-600 body-font overflow-hidden  shadow-md">
        <div className="container px-5 py-12 text-center md:text-left md:py-24  mx-auto">
          <div className="lg:w-4/5 mx-auto justify-center md:justify-normal gap-8 flex flex-wrap flex-col-reverse md:flex-row">
            <Image width={400} height={400} src={heroSvg} alt="..." />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-2xl title-font text-gray-400 tracking-widest">
                Task Manager
              </h2>
              <br />
              <p className="leading-relaxed">
                Welcome to{" "}
                <span className="text-indigo-500 font-bold">Work Manager</span>{" "}
                – Your Ultimate Task Organization Solution. Simplify your day
                with our intuitive platform designed to help you effortlessly
                capture and manage your daily tasks. Streamline your
                productivity by organizing your to-dos and important activities
                all in one place. Experience the power of efficient task
                management with Work Manager today!
              </p>
              <br />
              <div className="md:w-fit md:block w-full flex justify-center">
                <Link
                  href={"/login"}
                  type="button"
                  className="flex w-fit shadow-md text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                >
                  Start Now{"   "}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cards Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap w-full mb-20 text-center ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-600">
                Features
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              CRUD operations, an essential feature of{" "}
              <span className="text-indigo-500 font-bold">Work Manager</span>,
              empower you to seamlessly manage your tasks. Create new tasks with
              ease, update or modify existing ones as your priorities evolve,
              retrieve task details at your convenience, and delete tasks when
              {"they're"} completed. With Work {"Manager's "}intuitive CRUD
              functionality, taking control of your tasks has never been more
              efficient.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-400 md:hover:scale-110 transition-all hover:text-white">
                <Image width={200} height={200} src={addTask} alt="..." />
                <br />
                <h2 className="text-lg  font-medium title-font mb-4">
                  Add Task
                </h2>
                <p className="leading-relaxed text-base">
                  Work Manager , empower you to seamlessly manage your tasks you
                  can add tasks.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-400 md:hover:scale-110 transition-all hover:text-white">
                <Image width={200} height={200} src={removeTask} alt="..." />
                <br />
                <h2 className="text-lg  font-medium title-font mb-4">
                  Remove Task
                </h2>
                <p className="leading-relaxed text-base">
                  Create new tasks with ease, and if you want to delete them
                  just do delete by just using its delete feature.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:bg-indigo-400 md:hover:scale-110 transition-all hover:text-white">
                <Image width={200} height={200} src={showTask} alt="..." />
                <br />
                <h2 className="text-lg  font-medium title-font mb-4">
                  Display Tasks
                </h2>
                <p className="leading-relaxed text-base">
                  Create new tasks with ease, and update,delete them and then
                  display them all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Would You Like To Do Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-3xl title-font font-bold text-gray-900 mb-4">
              So, what would you like to manage?
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Wherever you are, take your manager with you. Access your tasks
              and projects on mobile, laptop, desktop, tablet and even your
              watch! Everything syncs seamlessly across all devices, giving you
              ultimate control.
            </p>
          </div>
          <div className="flex flex-wrap sm:-m-4  -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center gap-12 mx-4">
            <div className="py-8 px-4 md:w-1/3 flex flex-col text-center items-center bg-indigo-500 rounded-xl text-white hover:bg-indigo-600 transition-colors ">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3 ">
                  Set Up An Account
                </h2>
                <p className="leading-relaxed text-base ">
                  Get started on your journey to efficient task management by
                  creating your account. Unlock the power of organized
                  productivity and stay on top of your daily tasks with ease.
                </p>
              </div>
            </div>
            <div className="py-8 px-3 md:w-1/3 flex flex-col text-center items-center bg-indigo-500 rounded-xl text-white hover:bg-indigo-600 transition-colors">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">Login</h2>
                <p className="leading-relaxed text-base ">
                  Sign in to access your organized task universe. Your
                  productive journey continues as you log in to effortlessly
                  manage, update, and conquer your daily tasks. {"Let's"} make
                  every moment count together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Overview */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed text-lg px-4 text-justify">
              Work Manager has truly transformed the way I approach my daily
              tasks. As someone {"who's"} always juggling numerous
              responsibilities, this platform has become my secret weapon for
              staying organized and focused. The ease of adding, updating, and
              marking tasks as complete is unparalleled, saving me valuable time
              and reducing the mental clutter. What sets Work Manager apart is
              its intuitive interface and seamless user experience. I no longer
              worry about missing deadlines or forgetting important activities.
              The ability to access my tasks from any device ensures I stay on
              track whether
              {"I'm "}at my desk or on the go. From personal to professional
              tasks, Work Manager adapts effortlessly to my needs. It has become
              my digital task companion, helping me prioritize effectively and
              achieve more with less stress. If {"you're"} looking for a
              game-changer in task management, look no further – Work Manager is
              the answer. Highly recommended to anyone seeking a smarter way to
              tackle their to-do list.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              JAWAD RAFIQUE
            </h2>
            <p className="text-gray-500">Web Devloper</p>
          </div>
        </div>
      </section>
    </>
  );
}
