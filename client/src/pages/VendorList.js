import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
// import UpdateVendor from "./UpdateVender";

const VendorList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const PER_PAGE = 15;
  const [selectedVendor, setSelectedVendor] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/vendor/get`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/vendor/delete/${id}`);
      toast.success("Vendor deleted successfully");
      fetchData(); // Refetch data after deletion
    } catch (error) {
      console.error("Error deleting vendor:", error);
      toast.error("Failed to delete vendor");
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedVendor(id);
  };

  const handleConfirmDelete = () => {
    handleDelete(selectedVendor);
    setSelectedVendor(null);
  };

  const handleCancelDelete = () => {
    setSelectedVendor(null);
  };

  const handleEdit = (id) => {
    navigate(`/updateVendor/${id}`);
  };

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);

  const displayedData = data.slice(offset, offset + PER_PAGE).map((row) => (
    <tr key={row._id} className="bg-gray-800 text-white">
      <td className="border px-4 py-2">{row.vendorName}</td>
      <td className="border px-4 py-2">{row.bankAccountNo}</td>
      <td className="border px-4 py-2">{row.bankName}</td>
      <td className="border px-4 py-2">
        <button
          className="text-blue-500 mr-2"
          onClick={() => handleEdit(row._id)}
        >
          Edit
        </button>
        <button
          className="text-red-500"
          onClick={() => handleDeleteClick(row._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-3xl mb-4 font-bold">List of Vendors</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2">Vendor Name</th>
            <th className="px-4 py-2">Bank Account No.</th>
            <th className="px-4 py-2">Bank Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{displayedData}</tbody>
      </table>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center mt-4"}
        activeClassName={"text-gray-900 bg-white"}
        previousClassName={"border px-4 py-2 mr-2 rounded-lg"}
        nextClassName={"border px-4 py-2 ml-2 rounded-lg"}
        disabledClassName={"opacity-50"}
        breakClassName={"mx-2"}
      />
      {selectedVendor && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 ">
          <div className="bg-white p-4 rounded-lg bg-gray-500">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this vendor?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorList;
