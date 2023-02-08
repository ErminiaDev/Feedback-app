
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import PropTypes from 'prop-types'

const FeedbackForm = props => {
	const [text, setText] = useState("")

	const handleTextChange = (e) => {
		setText(e.target.value)
	}

  	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>
				{/* @todo - rating select component */}
				<div className="input-group">
					<input 
					onChange={handleTextChange} 
					type="text" 
					placeholder="Write a review" 
					value={text}
					/>
					<button type="submit">Send</button>
				</div>
			</form>
		</Card>
  	)
}

FeedbackForm.propTypes = {}

export default FeedbackForm