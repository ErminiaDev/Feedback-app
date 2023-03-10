import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		console.log()
	}

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList 
				feedback={feedback} 
				handleDelete={deleteFeedback} 
				/>
			</div>
		</>
	
	)
}

export default App;