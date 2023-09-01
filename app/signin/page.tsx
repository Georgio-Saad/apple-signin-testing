import React from 'react';

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="h-56 bg-gray-500 w-96 rounded-lg align-middle flex flex-col justify-center items-center">
        <div>Signin</div>
        <div className="flex flex-col">
          <label>Email</label>
          <input />
        </div>
        <div className="flex flex-col">
          <label title="Password">Password</label>
          <input />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}
