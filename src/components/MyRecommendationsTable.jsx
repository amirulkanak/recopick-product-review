const MyRecommendationsTable = ({ recommendationsData, handleDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Query details</th>
            <th className="py-2">My Feedback</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row, replace with dynamic content */}
          {recommendationsData.map((recommendation) => (
            <tr key={recommendation._id}>
              <td className="border px-4 py-2">
                <p>{recommendation.productName}</p>
                <p className="text-violet-900">
                  Q: {recommendation.queryTitle}
                </p>
              </td>
              <td className="border px-4 py-2">
                <p>{recommendation.RecommendationProductName}</p>
                <p className="text-green-900">
                  A: {recommendation.RecommendationTitle}
                </p>
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(recommendation._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendationsTable;
