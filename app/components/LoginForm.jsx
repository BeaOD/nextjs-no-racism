import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";

export default function LoginForm() {
  return (
    <div className="flex-row">
      <form>
        <div className="flex flex-col pb-5">
          <label htmlFor="email" className="pb-4">
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
          <label htmlFor="password" className="pb-4">
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

        <div className="pt-10">
          <button className="bg-gray-500 w-full p-3 rounded-md text-white hover:bg-gray-700 transition-all duration-200 ease-in-out">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
