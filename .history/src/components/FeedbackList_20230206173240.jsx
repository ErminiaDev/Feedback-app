const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div classname='feedback-list'>
			{feedback.map((item) => {
				
			})}
		</div>
	)
}

export default FeedbackList