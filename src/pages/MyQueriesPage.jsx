import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyQueriesPage = () => {
  const [myQueries, setMyQueries] = useState([]);

  useEffect(() => {
    const fetchMyQueries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/query/all`
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchMyQueries();
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="relative bg-add-queries-bg bg-cover bg-center h-96">
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-700 bg-opacity-85"></div>
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-4xl md:text-6xl text-clr-neutral font-bold mb-4">
            Your opinion matters
          </h1>
          <p className="text-lg md:text-xl text-clr-neutral mb-6">
            Our community of consumers helping each other make better decisions
            everyday.
          </p>
          <Link
            to={'/add-query'}
            className="mt-7 btn rounded-lg shadow-md hover:bg-clr-primary hover:text-clr-neutral transition-all">
            Add Queries
          </Link>
        </div>
      </section>

      {/* Queries Card In descending Order */}
    </>
  );
};

export default MyQueriesPage;
