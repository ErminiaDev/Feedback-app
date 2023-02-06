import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}

	return (
		<div classname='feedback-list'>
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item}/>
			))}
		</div>
	)
}

FeedbackList.propTypes = {
	feedback: Proptypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.number.isRequired,
			id: PropTypes.number.isRequired,
		})
	)
}

export default FeedbackList
