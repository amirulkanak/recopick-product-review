import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import MyRecommendationsTable from '../components/MyRecommendationsTable';
import Swal from 'sweetalert2';

const MyRecommendationsPage = () => {
  const { user } = useAuth();
  const [recommendationsData, setRecommendationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the all by current user email recommendations
  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_API_URL
        }/recommendation/myRecommendations/${user.email}`
      );
      setRecommendationsData(data.result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [user.email]);

  // Delete Recommendation
  const deleteRecommendation = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API_URL}/recommendation/delete/${id}`
      );
      if (data.success) {
        Swal.fire({
          title: 'Deleted!',
          text: `${data.message}`,
          icon: 'success',
        });
        fetchRecommendations();
      }
    } catch (error) {
      console.error('Error deleting recommendation:', error);
    }
  };

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Want to delete?',
      text: 'The Recommendation will be deleted permanently from your list',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRecommendation(id);
      }
    });
  };

  return (
    <section className="max-width-wrapper mt-10 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        My Recommendations
      </h2>
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={5} />
        </div>
      ) : null}
      {!loading && recommendationsData.length === 0 ? (
        <p className="text-center text-xl">No Recommendations Found</p>
      ) : null}
      {/* Table */}
      {/* Recommendation table */}
      {!loading && recommendationsData.length > 0 ? (
        <MyRecommendationsTable
          recommendationsData={recommendationsData}
          handleDelete={handleDelete}
        />
      ) : null}
    </section>
  );
};

export default MyRecommendationsPage;
