const RecommendationComment = ({ comment }) => {
  return (
    <div className="mt-5 bg-gradient-to-r from-clr-secondary/10 to-stone-400/10 p-6 rounded-lg shadow-md">
      <div className="py-4 border-b border-clr-accent/80">
        <div className="flex items-center">
          <img
            src={comment.recommenderPhoto}
            alt={comment.recommenderName}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{comment.recommenderName}</h3>
            <p className="text-sm text-clr-primary-text">
              {new Date(comment.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <h4 className="text-xl font-semibold mt-4">
        {comment.RecommendationTitle}
      </h4>
      <h4 className="text-lg font-semibold mt-2">
        {comment.RecommendationProductName}
      </h4>
      <p className="text-clr-primary mt-2">{comment.RecommendationReason}</p>
      <div className="mt-4">
        <div className="w-48 h-48">
          <img
            src={comment.RecommendationProductImage}
            alt={comment.RecommendationProductName}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendationComment;
