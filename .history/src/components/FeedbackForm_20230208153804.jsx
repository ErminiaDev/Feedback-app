import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackForm = props => {
  return (
	<Card>
		<form>
			<h2>How would you rate your service with us?</h2>
			{/* @todo - rating select component */}
			
		</form>
	</Card>
  )
}

FeedbackForm.propTypes = {}

export default FeedbackForm