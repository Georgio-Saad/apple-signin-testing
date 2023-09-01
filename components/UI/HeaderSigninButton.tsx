'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function HeaderSigninButton() {
  const { data: session, status } = useSession();

  const [isShowingProfileInfo, setIsShowingProfileInfo] = useState(false);

  return (
    <>
      <button
        className="p-3 bg-white mr-14 shadow-md rounded-full hover:scale-110 duration-300"
        onClick={() => {
          if (session) {
            return signOut();
          }

          return signIn();
        }}
      >
        {session ? (
          <Image
            src={session.user?.image || ''}
            loading="eager"
            alt="Hey"
            height={40}
            width={40}
            className="rounded-full"
          />
        ) : status === 'loading' ? (
          <div className="h-[40px] w-[40px] rounded-full" />
        ) : (
          'Sign in'
        )}
      </button>
      {isShowingProfileInfo && (
        <div
          className={`transition-opacity opacity-${
            isShowingProfileInfo ? 100 : 0
          } duration-300 ease-in-out absolute flex flex-col z-10 bg-gradient-to-br from-white to-gray-200 shadow-lg rounded-lg p-10 h-80 w-80 right-32 top-16`}
        >
          Hey
        </div>
      )}
    </>
  );
}
