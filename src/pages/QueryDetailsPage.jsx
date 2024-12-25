import { useEffect, useState } from 'react';
import QueryDetailsCard from '../components/QueryDetailsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddRecommendationForm from '../components/AddRecommendationForm';

const QueryDetailsPage = () => {
  const [queryData, setQueryData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchQuery = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/query/${id}`
      );
      setQueryData(data.result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching query:', error);
    }
  };
  useEffect(() => {
    fetchQuery();
  }, [id]);

  return (
    <>
      {/* query card Details */}
      <section className="max-width-wrapper">
        <h2 className="text-3xl font-semibold mb-10 text-center mt-10">
          Query Details
        </h2>

        {loading && (
          <div className="flex items-center justify-center">
            <LoadingSpinner size={5} />
          </div>
        )}
        {!loading && <QueryDetailsCard query={queryData} />}
      </section>

      {/* Add Recommendation Section */}
      <section className="max-width-wrapper mt-10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Add Recommendation
        </h2>
        {/* Add Recommendation Form  */}
        {!loading && (
          <AddRecommendationForm query={queryData} refetch={fetchQuery} />
        )}
      </section>
    </>
  );
};

export default QueryDetailsPage;
