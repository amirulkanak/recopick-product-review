import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import MyQueryCard from '../components/MyQueryCard';
import LoadingSpinner from './../components/LoadingSpinner';

const MyQueriesPage = () => {
  const [myQueries, setMyQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMyQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/query/user/${user.email}`
        );

        setMyQueries(data.result);
        if (data.result.length === 0) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchMyQueries();
  }, []);

  console.log(myQueries);
  return (
    <>
      {/* Banner */}
      <section className="relative bg-add-queries-bg bg-cover bg-center h-96">
        {/* Overlay */}
        <div className="absolute inset-0 bg-emerald-700 bg-opacity-90"></div>
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
      <section className="max-width-wrapper my-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          My Query List
        </h2>
        {myQueries.length === 0 ? (
          <div className="flex items-center justify-center">
            {loading ? (
              <LoadingSpinner size={3} />
            ) : (
              ' Your List is empty. Please add some query.'
            )}
          </div>
        ) : (
          <div className="grid gap-5 w-fit mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {myQueries.map((query) => (
              <MyQueryCard key={query._id} query={query} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MyQueriesPage;
