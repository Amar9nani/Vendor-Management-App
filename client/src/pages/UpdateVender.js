import React, { useState,useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateVendor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vendorName, setVendorName] = useState('');
  const [bankAccountNo, setBankAccountNo] = useState('');
  const [bankName, setBankName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/vendor/get/${id}`);
        console.log(response)
        setVendorName(response.data.vendorName)
        setBankAccountNo(response.data.bankAccountNo)
        setBankName(response.data.bankName)
        setAddressLine1(response.data.addressLine1)
        setAddressLine2(response.data.addressLine2)
        setCity(response.data.city)
        setCountry(response.data.country)
        setZipCode(response.data.zipCode)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const updatedData = {
        vendorName,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode
      };
  
      const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/vendor/update/${id}`, updatedData);
      console.log(response);
  
      if (response.status === 200) {
        toast.success("Vendor updated successfully!");
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error updating vendor information");
      console.error("Error updating vendor:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Update Vendor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="vendorName" className="block mb-1">Vendor Name</label>
            <input type="text" id="vendorName" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={vendorName} onChange={(e) => setVendorName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="bankAccountNo" className="block mb-1">Bank Account No.</label>
            <input type="text" id="bankAccountNo" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={bankAccountNo} onChange={(e) => setBankAccountNo(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="bankName" className="block mb-1">Bank Name</label>
            <input type="text" id="bankName" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={bankName} onChange={(e) => setBankName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="addressLine1" className="block mb-1">Address Line 1</label>
            <input type="text" id="addressLine1" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="addressLine2" className="block mb-1">Address Line 2</label>
            <input type="text" id="addressLine2" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} required/>
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-1">City</label>
            <input type="text" id="city" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-1">Country</label>
            <input type="text" id="country" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
            <input type="text" id="zipCode" className="w-full rounded-md bg-gray-700 text-white px-4 py-2" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
          <div className='flex gap-10'>
          <button onClick={()=>{navigate("/")}} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Cancel</button>
          <button  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update Vendor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVendor;
