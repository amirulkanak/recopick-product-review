import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import RecommendationsForMeTable from '../components/RecommendationsForMeTable';
import LoadingSpinner from '../components/LoadingSpinner';

const RecommendationsForMe = () => {
  const { user } = useAuth();
  const [recommendationsData, setRecommendationsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the all by current user email recommendations
  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/recommendation/forMe/${
          user.email
        }`
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

  console.log('recommendationsData:', recommendationsData);

  return (
    <section className="max-width-wrapper mt-10 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Recommendations For Me
      </h2>
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={5} />
        </div>
      ) : null}
      {!loading && recommendationsData.length === 0 ? (
        <p className="text-center text-xl">
          No Recommendation for your query yet!
        </p>
      ) : null}
      {/* Table */}
      {/* Recommendation table */}
      {!loading && recommendationsData.length > 0 ? (
        <RecommendationsForMeTable recommendationsData={recommendationsData} />
      ) : null}
    </section>
  );
};

export default RecommendationsForMe;
