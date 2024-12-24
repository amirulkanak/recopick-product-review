const QueryCard = ({ query }) => {
  const { productName, productImageURL, queryTitle, recommendationCount } =
    query;
  return (
    <div className="max-w-lg bg-clr-accent/10 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48">
        <img
          src={productImageURL}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-lg font-medium mb-2">{productName}</p>
        <h2 className="text-lg font-semibold mb-2">{queryTitle}</h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-base text-gray-600">
            Recommendations:{' '}
            <span className="font-medium">{recommendationCount}</span>
          </span>
          <button className="bg-clr-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-clr-primary-text transition-colors">
            Recommend
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
