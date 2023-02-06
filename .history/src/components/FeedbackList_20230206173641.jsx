import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div classname='feedback-list'>
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item=/>
			))}
		</div>
	)
}

export default FeedbackList
