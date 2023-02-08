
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import PropTypes from 'prop-types'

const FeedbackForm = props => {
	const [text, setText] = useState("")
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState("")

	const handleTextChange = (e) => {
		if(text === "") {
			setBtnDisabled(true)
			setMessage(null
		} else if(text != "" && text.trim())
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
					<Button type="submit" isDisabled={btnDisabled}>Send</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
  	)
}

FeedbackForm.propTypes = {}

export default FeedbackForm