import PropTypes from 'prop-types'
import { FaPaintBrush } from 'react-icons/fa'

const FeedbackStats = ({ feedback }) => {
  	//Calculates rating average
	//reduce loops through the array and has 2 args, the accumulator and current
	//starts with the specified num and adds current value, etc basically returning a sum of all el
	let average = feedback.reduce((acc, cur) => {
		return acc + cur.rating
	}, 0) / feedback.length

	//1 decimal but not displaying .0
	average = average.toFixed(1).replace(/[.,]0$/, '')

  	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average rating: {isNaN(average) ? 0 : average}</h4>
		</div>
  	)
}

FeedbackStats.PropTypes = {
	feedback: PropTypes.array.isRequired,
}


export default FeedbackStats