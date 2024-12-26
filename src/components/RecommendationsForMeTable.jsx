import { Link } from 'react-router-dom';

const RecommendationsForMeTable = ({ recommendationsData }) => {
  return (
    <div data-aos="zoom-in" className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">My Query</th>
            <th className="py-2">Other's Feedback</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
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
                <Link
                  to={`/query-details/${recommendation.queryId}`}
                  className="bg-clr-primary text-white px-4 py-2 rounded">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationsForMeTable;
