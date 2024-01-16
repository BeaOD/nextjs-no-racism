import React from 'react'
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="">
      {/* first part */}
      <div className="bg-red"></div>

      {/* second part */}
      <div className="bg-green"></div>

      {/* third part */}
      <div className="flex  flex-row">
        <span className=" flex bg-yellow">
          Copyright <FaCopyright /> Big Tech Inc.
        </span>

        <span className="flex">All Rights Reserved Big Tech Inc.</span>
      </div>
    </div>
  );
}
