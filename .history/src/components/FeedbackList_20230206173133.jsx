const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yetr</p>
	}
	return (
		<div>
			List
		</div>
	)
}

export default FeedbackList
