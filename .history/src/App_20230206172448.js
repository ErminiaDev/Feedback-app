import { useState } from "react";
import Header from "./components/header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

function App() {
	
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