import { useState } from 'react';
import useAuth from './../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const AddRecommendationForm = ({ query, refetch }) => {
  const [formData, setFormData] = useState({
    RecommendationTitle: '',
    RecommendationProductName: '',
    RecommendationProductImage: '',
    RecommendationReason: '',
  });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recommendationQueryData = {
      ...formData,
      queryId: query._id,
      queryTitle: query.queryTitle,
      productName: query.productName,
      userEmail: query.user.email,
      userName: query.user.name,
      recommenderEmail: user.email,
      recommenderPhoto: user.photoURL,
      recommenderName: user.displayName,
      createdAt: new Date().toISOString(),
    };

    // Send the data to the backend
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/recommendation/create`,
        recommendationQueryData
      );
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: `${data.message}. Check your Recommendation in All Recommendation.`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        setLoading(false);
        refetch.query();
        refetch.recommendation();
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
      console.error('Error submitting recommendation:', error);
    }

    // Reset form
    setFormData({
      RecommendationTitle: '',
      RecommendationProductName: '',
      RecommendationProductImage: '',
      RecommendationReason: '',
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-clr-accent/20 to-clr-accent/30 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recommendation Title */}
        <div>
          <label
            htmlFor="RecommendationTitle"
            className="block text-base font-medium">
            Recommendation Title
          </label>
          <input
            type="text"
            id="RecommendationTitle"
            name="RecommendationTitle"
            value={formData.RecommendationTitle}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            placeholder="Enter the title"
            required
          />
        </div>

        {/* Recommended Product Name */}
        <div>
          <label
            htmlFor="RecommendationProductName"
            className="block text-base font-medium">
            Recommended Product Name
          </label>
          <input
            type="text"
            id="RecommendationProductName"
            name="RecommendationProductName"
            value={formData.RecommendationProductName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            placeholder="Enter the product name"
            required
          />
        </div>

        {/* Recommended Product Image */}
        <div>
          <label
            htmlFor="RecommendationProductImage"
            className="block text-base font-medium ">
            Recommended Product Image URL
          </label>
          <input
            type="url"
            id="RecommendationProductImage"
            name="RecommendationProductImage"
            value={formData.RecommendationProductImage}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            placeholder="Enter the image URL"
            required
          />
        </div>

        {/* Recommendation Reason */}
        <div>
          <label
            htmlFor="RecommendationReason"
            className="block text-base font-medium ">
            Recommendation Reason
          </label>
          <textarea
            id="RecommendationReason"
            name="RecommendationReason"
            value={formData.RecommendationReason}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-4 py-2 rounded-md shadow-sm border focus:outline-none focus:ring-2 focus:ring-clr-secondary"
            placeholder="Why do you recommend this product?"
            required
          />
        </div>

        {/* Submit Button */}
        {user ? (
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-clr-primary-text rounded-md shadow-sm hover:bg-opacity-80">
            {loading ? <LoadingSpinner size={1} /> : `Add Recommendation`}
          </button>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Link
              to={'/login'}
              className="w-full text-center px-4 py-2 text-white bg-clr-primary-text rounded-md shadow-sm hover:bg-opacity-80">
              Please login to add recommendation
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddRecommendationForm;
