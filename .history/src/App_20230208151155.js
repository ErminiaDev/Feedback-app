import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete?'))
		setFeedback(feedback.filter((item) => item.id !== id))
	}

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList 
				feedback={feedback} 
				handleDelete={deleteFeedback} 
				/>
				FeedBackS
			</div>
		</>
	
	)
}

export default App;