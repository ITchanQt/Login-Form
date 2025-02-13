import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <div>
          <Link to="/login" className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2">Login</Link>
          <Link to="/register" className="py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Register</Link>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to MyApp!</h1>
      </div>
    </div>
  );
}

export default LandingPage;
