const QueryDetailsCard = ({ query }) => {
  return (
    <div
      data-aos="zoom-in"
      className="max-w-2xl mx-auto bg-clr-accent/10 shadow-lg rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Posted User Details */}
        <div className="mb-4">
          <div className="flex items-center gap-1 space-x-2">
            <img
              src={query.user.profileImageURL}
              alt={query.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{query.user.name}</h3>
              <p className="text-gray-600 text-sm">
                {new Date(query.createdAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                ,{' '}
                {new Date(query.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-x-4 gap-4">
          <div className="max-w-96">
            <img
              src={query.productImageURL}
              alt={query.productName}
              className="w-full h-full object-cover rounded-md border"
            />
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-semibold mb-1">
              {query.productName}
            </h2>
            <p className="text-base lg:text-lg text-gray-700">
              {query.productBrand}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Q: {query.queryTitle}</h3>
          <p className="text-base mt-2">
            Reason:{' '}
            <span className="text-violet-800">
              {query.boycottingReasonDetails}
            </span>
          </p>
        </div>
        <div className="mt-4 text-gray-600 text-sm">
          <p className="text-base mb-3">
            Recommendation:{' '}
            <span className="text-green-700 font-bold">
              {query.recommendationCount}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QueryDetailsCard;
