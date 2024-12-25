import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import MyQueryCard from '../components/MyQueryCard';
import LoadingSpinner from './../components/LoadingSpinner';
import Swal from 'sweetalert2';

const MyQueriesPage = () => {
  document.title = 'My Queries | Recopick';
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
  }, [myQueries]);

  const deleteQuery = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API_URL}/query/delete/${id}`
      );
      if (data.success) {
        Swal.fire({
          title: 'Deleted!',
          text: `${data.message}`,
          icon: 'success',
        });
      }
      setMyQueries(myQueries.filter((query) => query._id !== id));
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  //  delete query
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Want to delete?',
      text: 'The query will be deleted permanently from your list',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteQuery(id);
      }
    });
  };

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
          <div className="flex items-center justify-center text-lg">
            {loading ? (
              <LoadingSpinner size={3} />
            ) : (
              <div className="text-center">
                <div className="mb-5">
                  {' '}
                  Your List is empty. Please add some query.
                </div>
                <Link
                  to={'/add-query'}
                  className="mt-7 btn rounded-lg shadow-md hover:bg-clr-primary hover:text-clr-neutral transition-all">
                  Add Query
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-5 w-fit mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {myQueries.map((query) => (
              <MyQueryCard
                key={query._id}
                query={query}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default MyQueriesPage;
