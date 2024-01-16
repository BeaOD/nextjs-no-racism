import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

export default function SignUpForm() {
  return (
    <div className="flex justify-center w-full">
      <form className=" w-full lg:w-[550px] px-6">
        <div className="text-red text-center bg-blue-500"> Join our community</div>
        <div className="flex flex-col pb-5 w-full">
          <label htmlFor="fullname" className="pb-4 text-white">
            Full Name
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder=" Full Name "
              className="h-15 text-black w-full px-2 h-11 outline outline-1 outline-slate-300 rounded-md"
            />
            <button className="absolute right-2 top-3">
              <IoPersonSharp />
            </button>
          </div>
        </div>

        <div className="flex flex-col pb-5">
          <label htmlFor="email" className="pb-4 text-white">
            Email
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Email "
              className="h-15 text-black w-full px-2 h-11 outline outline-1 outline-slate-300 rounded-md"
            />
            <button className="absolute right-2 top-3">
              <MdEmail />
            </button>
          </div>
        </div>

        <div className="flex flex-col pb-2">
          <label htmlFor="password" className="pb-4 text-white">
            Password
          </label>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Password"
              className="h-15 text-black w-full px-2 h-11 outline outline-1 outline-slate-300 rounded-md"
            />
            <button className="absolute right-2 top-3">
              <IoMdEyeOff fontSize={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex flex-col pb-2">
          <label htmlFor="password" className="pb-4  text-white ">
            Confirm Password
          </label>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="Confirm Password"
              className="h-15 text-black w-full px-2 h-11 outline outline-1 outline-slate-300 rounded-md"
            />
            <button className="absolute right-2 top-3">
              <IoMdEyeOff fontSize={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="pt-10">
          <button className="bg-gray-500 w-full p-3 rounded-md text-white hover:bg-gray-700 transition-all duration-200 ease-in-out">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
