import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import 

const FeedbackItem = ({ item }) => {

	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
