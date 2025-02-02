import React from "react";
import { Link,  Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { logOut } = UserAuth();


  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <span href="#" className="text-xl font-bold">
          Vendor
        </span>
        <div>
          <Link to="/" className="mr-4">Display</Link>
          <Link to="/create " className="mr-4">Create</Link>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
