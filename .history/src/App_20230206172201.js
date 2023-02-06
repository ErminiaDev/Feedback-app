import {const [state, setstate] = useState(initialState)}
import Header from "./components/header";
import FeedbackItem from "./components/FeedbackItem";

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