const FeedbackStats = ({ feedback }) => {
  return (
	<div className="feedback-stats">
		<h4>{feedback.lengthReviews</h4>
		<h4>Average rating: 10</h4>
	</div>
  )
}

export default FeedbackStats