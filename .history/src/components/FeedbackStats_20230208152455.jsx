const FeedbackStats = ({ feedback }) => {
  	//Calculates rating average
	//reduce loops through the array and has two arguments, the accumulator and current
	//starts with the specified num and adds current value, etc basically 
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating
	}, 0) / feedback.length

  	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average rating: {average}</h4>
		</div>
  	)
}

export default FeedbackStats