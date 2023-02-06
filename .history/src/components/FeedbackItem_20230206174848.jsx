import Card from "./shared/Card"

const FeedbackItem = ({item}) => {

	return (
		<>
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
		</>
	)
}

FeedbackItem.propTypes = {

}

export default FeedbackItem
