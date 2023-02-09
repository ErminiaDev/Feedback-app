import { v4 as uuidv4 } from "uuid"
import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	

	return (
		<FeedbackProvider>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats />
				<FeedbackList />
			</div>
		</FeedbackProvider>
	)
}

export default App;