import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './component/Navbar';
import Protected from './component/Protected';
import VendorList from './pages/VendorList';
import Signin from './pages/Signin';
import CreateVendorPage from './pages/CreateVendorPage';
import UpdateVender from './pages/UpdateVender';


function App() {
  return (
    <div>
      {/* consoleprocess.env.REACT_APP_BACKEND_URL */}
      <AuthContextProvider>
        <Routes>
          {/* Public route for sign-in */}
          <Route path='/signin' element={<Signin />} />
          
          {/* Protected routes */}
          <Route
            path='/*'
            element={
              <Protected>
                {/* Nested routes within Protected */}
                <Routes>
                <Route path='/' element={<Navbar />} > 
                <Route path='/' element={<VendorList />} />
                <Route path='/create' element={<CreateVendorPage/>} />
                <Route path="/updateVendor/:id" element={<UpdateVender/>} />
                </Route>
                
                </Routes>
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
