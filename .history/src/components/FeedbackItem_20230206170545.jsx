import { useState } from "react"

const FeedbackItem = props => {
	const [rating, setRating] = useState(7)
	const [text, setText] = useState(initialState)

	return (
		<div className="card">
			<div className="num-display">10</div>
			<div className="text-display"></div>
		</div>
	)
}

FeedbackItem.propTypes = {

}

export default FeedbackItem
