import aboutSvg from "@/app/assets/about.svg";
import Image from "next/image";
import type { Metadata } from "next";

export const metdata: Metadata = {
  title: "About Us",
  description: "This is about us page",
};

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image src={aboutSvg} width={800} height={500} alt="..." />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image src={aboutSvg} width={50} height={50} alt="..." />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    JAWAD RAFIQUE
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                    {"Jawad's"} journey into programming started at an early
                    age, ignited by an insatiable curiosity about how things
                    work in the digital landscape. Behind the Work Manager site,
                    the driving force and creative mind is the accomplished web
                    developer, Jawad.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Work Manager has truly transformed the way. As someone{" "}
                  {"who's"} always juggling numerous responsibilities, this
                  platform has become my secret weapon for staying organized and
                  focused. The ease of adding, updating, and marking tasks as
                  complete is unparalleled, saving me valuable time and reducing
                  the mental clutter. What sets Work Manager apart is its
                  intuitive interface and seamless user experience. I no longer
                  worry about missing deadlines or forgetting important
                  activities. The ability to access my tasks from any device
                  ensures I stay on track whether {"I'm"} at my desk or on the
                  go. From personal to professional tasks, Work Manager adapts
                  effortlessly to my needs. It has become my digital task
                  companion, helping me prioritize effectively and achieve more
                  with less stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
