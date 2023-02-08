const FeedbackStats = ({ feedback }) => {
  	//Calculates rating average
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating
	})

  	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average rating: 10</h4>
		</div>
  	)
}

export default FeedbackStats