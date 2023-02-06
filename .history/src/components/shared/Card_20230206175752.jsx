const Card = ({ children }) => {
	return (
		<div>
			<div className="card"
			style={{
				backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? 
			}}>{children}</div>
		</div>
	)
}

export default Card
