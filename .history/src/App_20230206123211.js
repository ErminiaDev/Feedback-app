import Header from "./components/header";

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
	text: 
}
export default App;