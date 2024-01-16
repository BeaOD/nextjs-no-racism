//the design here should catch content routed to it
//so this acts as a template. and like blogs, because posts are many, ids are
//automatically generated for it. and the content conforms to this page.
//so the page.js file under the [id]or [slug] has to be designed to reflect how to 
//want the page to look like



import React from "react";
// import Family from "./family";
// import School from "./school";
// import Sports from "./sports";
// import Work from "./work";
import Link from "next/link";

export default function Fields() {
  return (
    <div>
      <h3>professional fields</h3>
      <Link href={"./Family"}>Family</Link>
      <Link href={"./School"}>School</Link>
      <Link href={"./Sports"}>Sports</Link>
      <Link href={"./Work"}>Work</Link>
    </div>
  );
}
