import { useEffect, useState } from 'react';
import QueryCard from '../components/QueryCard';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const AllQueriesPage = () => {
  document.title = 'All Queries | Recopick';
  const [queries, setQueries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [gridLayout, setGridLayout] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/query/all`
        );
        setQueries(data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching query Data', error);
      }
    };

    fetchQueries();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // search filter
  const filteredQueries = queries.filter((query) =>
    query.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="bg-clr-neutral p-4 min-h-screen">
      <div className="max-width-wrapper">
        <h2 className="text-2xl font-semibold mb-10 text-center mt-20">
          All Queries
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Search Query</h2>
            <input
              type="text"
              placeholder="Search by product name"
              value={searchText}
              onChange={handleSearch}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-clr-accent focus:outline-none"
            />
          </div>

          <div className="flex">
            {[1, 2, 3].map((columns) => (
              <button
                key={columns}
                className={`px-4 py-2 mx-1 rounded-lg ${
                  gridLayout === columns
                    ? 'bg-clr-primary-text text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => setGridLayout(columns)}>
                {columns} Column{columns > 1 && 's'}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`w-fit mb-10 mx-auto grid gap-5 ${
            gridLayout === 1
              ? 'grid-cols-1'
              : gridLayout === 2
              ? 'grid-cols-2'
              : 'grid-cols-3'
          }`}>
          {loading && <LoadingSpinner size={2} />}
          {filteredQueries.map((query) => (
            <QueryCard key={query._id} query={query} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllQueriesPage;
