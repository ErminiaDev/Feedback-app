const Card = ({ children }) => {
	return (
		<div>
			<div className="card"
			style={{
				backgroundColor: reverse ? 'rgba(0,0,0,0.4'
			}}>{children}</div>
		</div>
	)
}

export default Card
