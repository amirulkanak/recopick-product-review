import { useEffect, useState } from 'react';
import QueryDetailsCard from '../components/QueryDetailsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AddRecommendationForm from '../components/AddRecommendationForm';
import RecommendationComment from '../components/RecommendationComment';

const QueryDetailsPage = () => {
  const [queryData, setQueryData] = useState({});
  const [recommendationData, setRecommendationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingRecom, setLoadingRecom] = useState(true);
  const { id } = useParams();

  // Fetch the query data
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

  // fetch recommendation data
  const fetchRecommendation = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/recommendation/comments/${id}`
      );
      setRecommendationData(data.result);
      setLoadingRecom(false);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  useEffect(() => {
    fetchQuery();
    fetchRecommendation();
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
          <AddRecommendationForm
            query={queryData}
            refetch={{ query: fetchQuery, recommendation: fetchRecommendation }}
          />
        )}
      </section>

      {/* All Recommendation comments */}
      <section className="max-width-wrapper mt-10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          All Recommendations
        </h2>
        {/* All Recommendations */}
        {loadingRecom && (
          <div className="flex items-center justify-center">
            <LoadingSpinner size={5} />
          </div>
        )}
        {!loadingRecom && recommendationData.length === 0 && (
          <h3 className="text-xl text-center">No Recommendations yet!</h3>
        )}
        {!loadingRecom &&
          recommendationData.length > 0 &&
          recommendationData.map((comment) => (
            <RecommendationComment key={comment._id} comment={comment} />
          ))}
      </section>
    </>
  );
};

export default QueryDetailsPage;
