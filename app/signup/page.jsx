import React from "react";
import Image from "next/image";
import SignupImage from "../../public/images/close-up.jpg";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <main>
      <div className=" relative">
        <Image
          alt=""
          src={SignupImage}
          className="absolute -z-10 h-[700px] object-cover top-0 rounded-md"
        />
        <div className="h-[700px] absolute top-0 bg-black w-full opacity-50 -z-10"></div>
        <div className="flex py-10 z-50 ">
          
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
