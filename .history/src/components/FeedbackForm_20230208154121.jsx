
import Card from './shared/Card'
import { useState } from 'react'
import PropTypes from 'prop-types'

const FeedbackForm = props => {
	const [text, setText] = useState("")

  	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				{/* @todo - rating select component */}
				<div className="input-group">
					<input onChange={type="text" placeholder="Write a review" />
					<button type="submit">Send</button>
				</div>
			</form>
		</Card>
  	)
}

FeedbackForm.propTypes = {}

export default FeedbackForm