import { useState } from "react"

const FeedbackItem = props => {
	const [rating, setRating]

	return (
		<div className="card">
			<div className="num-display">10</div>
			<div className="text-display">This is an example of a feedback item</div>
		</div>
	)
}

FeedbackItem.propTypes = {

}

export default FeedbackItem
