import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-auto justify-around items-center bg-stone-300">
        <div className="text-left">
          <h2 className="text-5xl p-3">
            One Step Closer To <br /> Your Dream Job
          </h2>
          <p className="p-3 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="border bg-white rounded ml-5 p-4 text-3xl">
            get start
          </button>
        </div>
        <div className="">
          <img src=".././../../assets/images/user.png" alt="" />
        </div>
      </div>
      <div className="bg-stone-200 py-4">
        <div className="p-6">
          <h2 className="text-3xl p-4">Job Category List</h2>
          <p className="p-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex max-sm:flex-col md:flex-row lg:flex-row justify-center p-5 ">
          <div className="border bg-zinc-200 border-black rounded p-7 m-5 max-sm:flex gap-5 justify-around">
            <img
              className="pb-3"
              src="../../../assets/icons/accounts.png"
              alt=""
            />
           <div>
           <p className="text-base">Account & Finance</p>
            <p className="text-xs">120 Jobs Available</p>
           </div>
          </div>
          <div className="border bg-zinc-200 border-black rounded p-7 m-5 max-sm:flex gap-5 justify-around">
            <img
              className="pb-3 "
              src="../../../assets/icons/creative.png"
              alt=""
            />
            <div>
            <p className="text-base">Creative design</p>
            <p className="text-xs">150 Jobs Available</p>
            </div>
          </div>
          <div className="border bg-zinc-200 border-black rounded p-7 m-5 max-sm:flex gap-5 justify-around">
            <img
              className="pb-3"
              src="../../../assets/icons/marketing.png"
              alt=""
            />
            <div >
            <p className="text-base">Marketing & Sales</p>
            <p className="text-xs">200 Jobs Available</p>
            </div>
          </div>
          <div className="border bg-zinc-200 border-black rounded p-7 m-5 max-sm:flex gap-5 justify-around">
            <img
              className="pb-3 "
              src="../../../assets/icons/chip.png"
              alt=""
            />
            <div>
            <p className="text-base">Engineering jobs</p>
            <p className="text-xs"> 300 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
