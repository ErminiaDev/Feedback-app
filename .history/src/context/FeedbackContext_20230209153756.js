import { createContext, useState } from "react";

const FeedbackContext = createContext()

//we have to create a provider

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState([
		{
			
		}
		id: 1,
		text: "This item is for context",
		rating: 10
	])
	return <FeedbackContext.Provider value={{

	}}>
		{children}
	</FeedbackContext.Provider>
}