import { useParams } from 'react-router-dom';
import UpdateQueryForm from '../components/UpdateQueryForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const MyQueryUpdatePage = () => {
  window.scrollTo(0, 0);
  document.title = 'Update Query | Recopick';
  const [queryData, setQueryData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
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

    fetchQuery();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size={5} />
        </div>
      ) : (
        <UpdateQueryForm queryData={queryData} />
      )}
    </div>
  );
};

export default MyQueryUpdatePage;
