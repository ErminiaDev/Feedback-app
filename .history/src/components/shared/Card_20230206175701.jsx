const Card = ({ children }) => {
	return (
		<div>
			<div className="card"
			style={{
				backgroundColor: reverse ? ''
			}}>{children}</div>
		</div>
	)
}

export default Card
