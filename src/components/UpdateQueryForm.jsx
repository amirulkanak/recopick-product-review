import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const UpdateQueryForm = ({ queryData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: queryData.productName,
    productBrand: queryData.productBrand,
    productImageURL: queryData.productImageURL,
    queryTitle: queryData.queryTitle,
    boycottingReasonDetails: queryData.boycottingReasonDetails,
  });
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Add the user details to the form data
    const finalQueryData = {
      ...formData,
      createdAt: new Date().toISOString(),
      recommendationCount: 0,
      user: {
        name: user.displayName,
        email: user.email,
        profileImageURL: user.photoURL,
      },
    };

    // Post the data to the backend
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_API_URL}/query/update/${queryData._id}`,
        finalQueryData
      );
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: `${data.message}. Check your Updated Query in My Queries.`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        setLoading(false);

        // Redirect to My Queries page
        navigate('/my-queries');
      } else {
        setLoading(false);
        Swal.fire({
          title: 'Error!',
          text: `${data.message}. Please try again.`,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    } catch (error) {
      console.error('Error adding query:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-clr-accent/20 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-clr-primary-text mb-6 text-center">
        Update Query
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            required
          />
        </div>

        {/* Product Brand */}
        <div>
          <label htmlFor="productBrand" className="block font-medium mb-2">
            Product Brand
          </label>
          <input
            type="text"
            id="productBrand"
            name="productBrand"
            value={formData.productBrand}
            onChange={handleChange}
            placeholder="Enter product brand"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            required
          />
        </div>

        {/* Product Image URL */}
        <div>
          <label htmlFor="productImageURL" className="block font-medium mb-2">
            Product Image-URL
          </label>
          <input
            type="url"
            id="productImageURL"
            name="productImageURL"
            value={formData.productImageURL}
            onChange={handleChange}
            placeholder="Enter product image URL"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            required
          />
        </div>

        {/* Query Title */}
        <div>
          <label htmlFor="queryTitle" className="block font-medium mb-2">
            Query Title
          </label>
          <input
            type="text"
            id="queryTitle"
            name="queryTitle"
            value={formData.queryTitle}
            onChange={handleChange}
            placeholder="Enter query title"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            required
          />
        </div>

        {/* Boycotting Reason Details */}
        <div>
          <label
            htmlFor="boycottingReasonDetails"
            className="block font-medium mb-2">
            Boycotting Reason Details
          </label>
          <textarea
            id="boycottingReasonDetails"
            name="boycottingReasonDetails"
            value={formData.boycottingReasonDetails}
            onChange={handleChange}
            placeholder="Provide detailed reason for boycotting"
            rows="4"
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            required></textarea>
        </div>

        {/* Add Query Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg shadow-md bg-clr-primary text-white hover:bg-clr-accent  hover:text-clr-primary transition-all">
            {loading ? <LoadingSpinner size={1} /> : `Update Query`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateQueryForm;
