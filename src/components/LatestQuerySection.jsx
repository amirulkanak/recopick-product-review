import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import QueryCard from './QueryCard';

const LatestQuerySection = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/query/all`
        );
        setQueries(data.result.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching query Data', error);
      }
    };

    fetchQueries();
  }, []);

  console.log(queries);
  return (
    <div className="max-width-wrapper mt-20 mb-10">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Latest Queries
      </h2>
      {/* Queries Cards */}
      {loading && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={2} />
        </div>
      )}
      {!loading && (
        <div className="grid w-fit mx-auto grid-cols-1 gap-5 mt-10 md:grid-cols-2 pc:grid-cols-3">
          {queries.map((query) => (
            <QueryCard key={query._id} query={query} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestQuerySection;
