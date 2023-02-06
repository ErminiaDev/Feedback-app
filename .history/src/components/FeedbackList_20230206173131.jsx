const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feed</p>
	}
	return (
		<div>
			List
		</div>
	)
}

export default FeedbackList
