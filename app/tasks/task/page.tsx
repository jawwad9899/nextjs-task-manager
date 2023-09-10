"use client";
import { TaskFieldsType } from "@/@types/Types";
import Message from "@/components/Message";
import { Context } from "@/context/createContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const { button } = useContext<any | null>(Context);
  const [formFields, setFormFields] = useState<TaskFieldsType>({
    taskName: "",
    taskDescription: "",
    img: "",
  });
  const [saveBtn, setSaveBtn] = useState<boolean>(true);

  useEffect(() => {
    if (
      formFields.taskName.length > 2 &&
      formFields.taskDescription.length > 10
    ) {
      setSaveBtn(false);
    } else {
      setSaveBtn(true);
    }
  }, [formFields]);

  function onChangeHandler(e: any): void {
    setFormFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function saveTask() {
    try {
      const res = await axios.post("/api/tasks", formFields);

      toast.success("Saved++ 😊");
      setFormFields({ taskName: "", taskDescription: "", img: "" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Message />
      <section className="text-gray-600 py-10 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div
            className={`flex flex-col text-center w-full mb-12 ${
              button?.state ? "hidden" : "block"
            }`}
          >
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-gray-900">
              Want To Add Tasks Read How To?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl ">
              To enhance task management, the inclusion of a prominent{" "}
              {" 'plus' "}
              button at the top of the interface proves to be highly effective.
              By clicking this button, users can effortlessly initiate the task
              creation process. This action triggers the appearance of a
              well-designed form, allowing users to input essential task data.
              The form guides users through the process, requesting details such
              as task name, due date, priority level, and any relevant notes.
              Once the user completes the form and submits the information, the
              task is seamlessly added to the task list. Navigating to the
              second page dedicated to task management, users can easily view
              their comprehensive list of tasks. This thoughtful design not only
              promotes a systematic approach to task tracking but also provides
              a user-friendly means to edit or delete tasks whenever necessary,
              ensuring a productive and organized task management experience.
            </p>
          </div>
          <div
            className={`lg:w-1/2 md:w-2/3 mx-auto ${
              button?.state ? "block" : "hidden"
            }`}
          >
            <h1 className="text-black text-2xl mb-6 text-center">
              Save A Task
            </h1>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="task_name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="task_name"
                    name="taskName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={formFields.taskName}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <label
                  htmlFor="taskDescription"
                  className="leading-7 text-sm text-gray-600"
                >
                  Task Description
                </label>
                <textarea
                  id="taskDescription"
                  name="taskDescription"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={formFields.taskDescription}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>

            <div className="w-full mb-5">
              <div className="relative">
                <label
                  htmlFor="img"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image Url {"(Optional)"}
                </label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formFields.img}
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                disabled={saveBtn}
                onClick={saveTask}
                className={`flex shadow-lg  mx-auto text-white  border-0 py-2 px-8 focus:outline-none ${
                  !saveBtn
                    ? "bg-indigo-500 hover:bg-indigo-600 cursor-pointer "
                    : "bg-indigo-300 "
                } rounded text-lg`}
              >
                + Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
