import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

//we have to create a provider

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This item is for context",
			rating: 10
		},
		{
			id: 2,
			text: "This item is for context",
			rating: 9
		},
		{
			id: 3,
			text: "This item is for context",
			rating: 8
		},
	])

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete?'))
		setFeedback(feedback.filter((item) => item.id !== id))
	}

	return <FeedbackContext.Provider value={{
		feedback,
		deleteFeedback,
		addFeedback,
	}}>
		{children}
	</FeedbackContext.Provider>
}

export default FeedbackContext