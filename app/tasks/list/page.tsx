"use client";

import Message from "@/components/Message";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {InfinitySpin } from "react-loader-spinner";

export default function Page() {
  const router = useRouter();
  const [tasks, setTasks] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  const [tasksLoading,setTasksLoading] = useState<boolean>(true);
  
  useEffect(() => {
    (async function () {
      const res = await axios.get("/api/tasks");
      setTasks(res.data.tasks);
      setTasksLoading(true);
    })();
  }, []);
  
  async function deleteTask(e: string) {
    try {
      let remains = tasks.filter((d: any) => {
        return d._id !== e;
      });

      await axios.delete(`/api/tasks/`, { params: { rq_id: e } });
      setTasks(remains);
      toast.info("Deleted.... 🗑️");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* Modal */}
      <Message />
      {/* Modal End */}
      <section className="text-gray-600  body-font relative accent-indigo-700">
        <div className="container px-5 py-16 mx-auto">
          <div className={`flex flex-col text-center w-full mb-12 gap-4`}>
            <div className="relative container overflow-x-auto  sm:rounded-lg">
              <div className="flex items-center justify-center pb-4 pt-4">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative flex w-full justify-center">
                  <input
                    disabled={tasks.length === 0}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    type="text"
                    id="table-search"
                    className="block p-2 pl-10 border border-indigo-500 outline-indigo-600  rounded-lg w-80 bg-gray-50 focus:ring-inidgo-500 focus:border-inidgo-500 "
                    placeholder="Type to search"
                  />
                </div>
              </div>

              <div className="tasks flex flex-wrap gap-4 justify-around   p-4">
                {tasksLoading && <InfinitySpin width="100" />
                {!tasksLoading && tasks.length === 0 && <h1>Empty!</h1>}
                {tasks
                    ?.filter((data: any) => {
                      return data.taskName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                    })
                    .map(({ taskName, taskDescription, _id, img }: any) => {
                      return (
                        <div
                          key={taskName}
                          className="max-w-sm w-fit h-fit  p-5    bg-indigo-200 hover:bg-indigo-400 transition-colors rounded-lg"
                        >
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
                              {taskName}
                            </h5>
                          </a>
                          {imgLoading && <h1>Loading Image...</h1>}
                          <Image
                            src={img}
                            width={400}
                            height={350}
                            className="rounded-lg mb-5 mb-t-5"
                            loading="lazy"
                            alt="Image"
                            onLoad={() => {
                              setImgLoading(false);
                            }}
                            onError={() => setImgLoading(false)}
                          />

                          <p className="mb-3 font-normal text-gray-900 ">
                            {taskDescription}
                          </p>
                          <div className="pt-3 border-indigo-400 ">
                            <button
                              onClick={() => deleteTask(_id)}
                              className=" text-center px-3 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                              style={{
                                clipPath: `polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)
                              `,
                              }}
                            >
                              DELETE
                            </button>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
