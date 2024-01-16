import React from 'react'
import Image from 'next/image'
import LoginImage from '/public/images/black-woman.jpg'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <main>
      <div className="flex justify-between items-center px-20 py-20 gap-10 lg:gap-20 pt-50 ">
        {/* image  */}
        <div className="flex-1">
          <Image src={LoginImage} alt="" className="rounded-md w-full" />
        </div>

        {/* form  */}
        <div className="flex-1">
          <div className='flex justify-center text<i class="fa fa-bold" aria-hidden="true"></i>
          mb-20'>
            <h1>WELCOME</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
