const MyQueryCard = ({ query, handleDelete }) => {
  return (
    <div className="max-w-lg mx-auto bg-clr-accent/10 shadow-lg rounded-lg overflow-hidden border">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={query.productImageURL}
            alt={query.productName}
            className="size-28 object-cover rounded-md border"
          />
          <div>
            <h2 className="text-xl font-semibold">{query.productName}</h2>
            <p className="text-sm text-gray-700">{query.productBrand}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">{query.queryTitle}</h3>
          <p className="text-base text-gray-700 mt-2">
            {query.boycottingReasonDetails}
          </p>
        </div>
        <div className="mt-4 text-gray-600 text-sm">
          <p className="text-base mb-3">
            Recommendation: {query.recommendationCount}
          </p>
          <p className="mb-1">
            Posted Date: {new Date(query.createdAt).toLocaleDateString()}
          </p>
          <p>
            Posted Time:{' '}
            {new Date(query.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="flex justify-end mt-4 space-x-3">
          <button
            // onClick={() => onViewDetails(query._id)}
            className="bg-clr-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
            View Details
          </button>
          <button
            // onClick={() => onUpdate(query._id)}
            className="bg-clr-primary-text/80 text-white px-4 py-2 rounded-md hover:hover:bg-opacity-100">
            Update
          </button>
          <button
            onClick={() => handleDelete(query._id)}
            className="bg-red-500/90 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
