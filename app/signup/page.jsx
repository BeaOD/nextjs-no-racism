import React from 'react'
import Image from 'next/image';
import SignupImage from '../../public/images/close-up.jpg'

export default function SignUp() {
  return (
    <main>
      <div className="flex flex-col">
        <div>
          <Image alt="" src={SignupImage} />
        </div>

        <div></div>
      </div>
    </main>
  );
}
