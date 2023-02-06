import { useState } from "react";
import Header from "./components/header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

function App() {
	const [,] = useState(initialState)

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackItem />
			</div>
		</>
	
	)
}

export default App;