import Link from "next/link"
import { IoHomeSharp } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <main>
      <div className="flex items-center justify-between p-10 bg-gray-100 shadow-md text-lg h-10">
        {/* div 1 */}
        <div >
          <Link href={'/'} className="flex items-center gap-2">
            <IoHomeSharp /> Home </Link>
        </div>
        {/* div 2 */}
        <div></div>
        {/* div 3 */}
        <div></div>
        {/* div 4 */}
        <div></div>
        {/* div 5*/}
        <div className="flex items-center gap-5" >
          <div >
            <Link className=" flex items-center gap-2"  href={'/login'}>
               <IoLogIn /> Login</Link>
          </div>
          <div >
          <Link href={'/signup'} className="flex items-center gap-2">
            <IoPersonAddSharp /> Sign Up</Link>
          </div>

        </div>

      </div>
    </main>
  )
}
