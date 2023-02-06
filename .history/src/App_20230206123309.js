import Header from "./components/header";
import PropTypes from 'prop-types'

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<h1>My App</h1>
			</div>
		</>
	
	)
}

Header.defaultProps = {
	text: 'Feedback UI'
}

Header.PropTypes = {
	
}

export default App;