import { createContext, useState } from "react";

const FeedbackContext = createContext()

//we have to create a provider

export const FeedbackProvider = ({children}) => {
	const [feedback, setFeedback] = useState([
		
	])
	return <FeedbackContext.Provider value={{

	}}>
		{children}
	</FeedbackContext.Provider>
}