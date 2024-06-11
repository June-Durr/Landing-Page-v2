import React from "react";

export const Hero = () => {
  return (
    <section className="pt-0 pb-10 relative min-h-screen ">
      <div className="overflow-hidden">
        <div className="flex flex-col items-center flex-wrap m-10 relative">
          <h1 className="text-5xl font-bold text-center mx-auto max-w-[70%]">
            Get your site
            <wbr />
            launched with us
            <wbr />
            TODAY!
          </h1>
          <p className="text-2xl my-7 px-1 text-gray-400">
            Get unlimited support for your first landing page
          </p>
        </div>
        <div className="flex justify-center w-full">
          <button className="text-white bg-sls-blue hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium text-2xl rounded-full px-10 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Launch 🚀
          </button>
        </div>
      </div>
    </section>
  );
};
