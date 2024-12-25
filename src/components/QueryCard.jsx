import { Link } from 'react-router-dom';

const QueryCard = ({ query }) => {
  const { _id, productName, productImageURL, queryTitle, recommendationCount } =
    query;
  return (
    <div className="max-w-lg bg-clr-accent/10 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <img
          src={productImageURL}
          alt={productName}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-sky-700 p-2 rounded-tr-lg text-white flex items-center gap-1 space-x-2">
          <img
            src={query.user.profileImageURL}
            alt={query.user.name}
            className="w-8 h-8 rounded-full bg-white"
          />
          <div>
            <h3 className="text-sm font-semibold">{query.user.name}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-medium mb-2">{productName}</p>
        <h2 className="text-lg font-semibold mb-2">{queryTitle}</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-base text-gray-600">
            Recommendations:{' '}
            <span className="font-medium">{recommendationCount}</span>
          </span>
          <Link
            to={`/query-details/${_id}`}
            className="bg-clr-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-clr-primary-text transition-colors">
            Recommend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
