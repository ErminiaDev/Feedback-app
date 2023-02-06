import { useState } from "react";
import Header from "./components/header";
import FeedbackItem from "./components/FeedbackItem";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList  />
			</div>
		</>
	
	)
}

export default App;