
import Card from './shared/Card'
im
import PropTypes from 'prop-types'

const FeedbackForm = props => {
  return (
	<Card>
		<form>
			<h2>How would you rate your service with us?</h2>
			{/* @todo - rating select component */}
			<div className="input-group">
				<input type="text" placeholder="Write a review" />
				<button type="submit">Send</button>
			</div>
		</form>
	</Card>
  )
}

FeedbackForm.propTypes = {}

export default FeedbackForm