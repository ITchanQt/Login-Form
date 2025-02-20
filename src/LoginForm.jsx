import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

function LoginForm() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (password) {
      setShow(!show);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className='flex items-center justify-center'>
              <input
                type={show ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required 
              />
              {password && (
                <p onClick={handleClick} className='ml-[-5vh] text-xl hover:cursor-pointer'>
                  {show ? <FiEye /> : <FiEyeOff />}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Log In
          </button>
          <a href=""><p className='text-2xl text-center'>Sign up?</p></a>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
